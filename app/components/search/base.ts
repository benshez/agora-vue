import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import _ from "lodash";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getConfigStore } from "~/common/config/store";
import { IApplicationConfig, } from "@common/config/interfaces/IApplicationConfig";
import { getStore as getLocationStore } from "@common/search/store";
import { getStore as getGeoLocationStore } from "@common/location/store";
import { ILocations } from "@common/search/interfaces/ILocations";
import { IGeolocation } from "@common/location/interfaces/IGeolocation";

@Component
export default class AgoraSearchBase extends Mixins(RootState) {
  @Prop(Object) source: String;
  @Prop(Object) descriptionLimit: number = 120;
  @Prop(Object) loading: boolean = false;
  @Prop(Object) model: any = null;
  @Prop(Object) search: any = null;
  @Prop(Object) select: any = null;
  @Prop(Object) value: any = null;
  @Prop(Object) currentQuery: string = null;
  @Prop(Object) previousQuery: string = null;
  @Prop(Object) features: any = [];
  @Prop(Object) config: IApplicationConfig = getConfigStore(this.$store).current;
  @Prop(Object) location: IGeolocation = null;

  @Watch("select")
  OnSelect(value: string) {

  }

  @Watch("selected")
  OnValue(value: string) {
    debugger
  }

  @Watch("search")

  OnSearchChanged(query: string, previousQuery: string) {

    this.currentQuery = query;

    if (!this.canDoSearch) return

    this.previousQuery = previousQuery ? previousQuery : "";

    this.loading = true;

    const newQuery = this.isNewQuery();

    // const matched = (x: any) => ({
    //   on: () => matched(x),
    //   otherwise: () => x,
    // })
    // const match = (x: any) => ({
    //   on: (pred: any, fn: any) => (pred(x) as any ? matched(fn(x)) as any : match(x) as any),
    //   otherwise: (fn: any) => fn(x),
    // })

    // let x = match(0.5)
    //   .on((x: number) => x < 0, () => 0)
    //   .on((x: number) => x >= 0 && x <= 1, () => 1)
    //   .otherwise((x: number) => x * 10)
    try {

      this.getLocations(query)
      //_.debounce(function (searchingForString) { this.getLocations(searchingForString) }, 500)
      let feature: any = null;

      if (this.features) {

      }
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;

    }
  }

  async created() {
    this.location = await getGeoLocationStore(
      this.$store
    ).loadCurrentLocation();
  }
  async getLocations(query: string) {
    if (!this.config) this.config = getConfigStore(this.$store).current
    let url = this.config.APP_SETTINGS.APIS.MAP_BOX_API().Url(query);
    const response: ILocations = await getLocationStore(this.$store).loadLocation(url);

    this.features = response.features;
  }

  OnItemSelected(value: any) {
    if (value) {
      const coords: IGeolocation = {
        latitude: value.geometry.coordinates[1],
        longitude: value.geometry.coordinates[0],
        center: value.center
      }

      getGeoLocationStore(this.$store).updateCurrentLocation(coords);
      this.location = coords;
    }
  }
  isNewQuery(): boolean {
    return this.currentQuery !== this.previousQuery;
  }
  get canDoSearch() {
    if (!this.currentQuery || this.currentQuery.length < 6) return false;
    return !this.loading;
  }
  get items() {
    return this.features.map((feature: any) => {
      const Description = _.truncate(feature.place_name, {
        "length": this.descriptionLimit,
        "omission": "..."
      });
      return Object.assign({}, feature, { Description });
    });
  }
  get mappedItems() {
    if (!this.model) return [];

    const mappedModel = this.model;

    return Object.keys(mappedModel).map((key) => {
      return {
        key,
        value: mappedModel[key] || "n/a"
      };
    });
  }
}