import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import _ from "lodash";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getConfigStore } from "~/common/config/store";
import { IApplicationConfig, } from "@common/config/interfaces/IApplicationConfig";
import { getStore as getLocationStore } from "@common/search/store";
import { ILocations } from "@common/search/interfaces/ILocations";

@Component
export default class AgoraSearchBase extends Mixins(RootState) {
  @Prop(Object) source: String;
  @Prop(Object) descriptionLimit: number = 120;
  @Prop(Object) loading: boolean = false;
  @Prop(Object) model: any = null;
  @Prop(Object) search: any = null;
  @Prop(Object) searchString: string = null;
  @Prop(Object) features: any = [];
  @Prop(Object) config: IApplicationConfig = getConfigStore(this.$store).current

  @Watch("search")
  async OnSearchChanged(searchingForString: string, oldVal: string) {
    this.searchString = searchingForString;

    if (!this.canDoSearch) return
    //if (this.items && this.items.length > 0) return;
    //if (!val || val.length < 6) return;

    //if (this.loading) return;

    this.loading = true;
    if (!this.config) this.config = getConfigStore(this.$store).current
    let url = this.config.APP_SETTINGS.APIS.MAP_BOX_API().Url(this.searchString);

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
      const response: ILocations = await getLocationStore(this.$store).loadLocation(url);
      this.features = response.features;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  get canDoSearch() {
    if (!this.searchString || this.searchString.length < 6) return false;
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
