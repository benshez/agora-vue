import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import axios from "axios";
import _ from "lodash";
import RootState from "@common/base/store/mixins/RootState";

@Component
export default class AgoraSearchBase extends Mixins(RootState) {
  @Prop(Object) source: String;
  @Prop(Object) descriptionLimit: number = 120;
  @Prop(Object) loading: boolean = false;
  @Prop(Object) model: any = null;
  @Prop(Object) search: any = null;
  @Prop(Object) features: any = [];
  @Prop(Object) accessToken: String = this.$store.state.ApplicationConfig.APP_SETTINGS.APIS.MAP_BOX_API().Token

  @Watch("search")
  async OnSearchChanged(val: string, oldVal: string) {
    if (this.items && this.items.length > 0) return;
    if (!val || val.length < 6) return;

    if (this.loading) return;

    this.loading = true;

    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${val}.json?access_token=${this.accessToken}`;

    const matched = (x: any) => ({
      on: () => matched(x),
      otherwise: () => x,
    })
    const match = (x: any) => ({
      on: (pred: any, fn: any) => (pred(x) as any ? matched(fn(x)) as any : match(x) as any),
      otherwise: (fn: any) => fn(x),
    })

    let x = match(0.5)
      .on((x: number) => x < 0, () => 0)
      .on((x: number) => x >= 0 && x <= 1, () => 1)
      .otherwise((x: number) => x * 10)

    debugger
    try {
      const response = await axios.get(url);
      this.features = response.data.features;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  get items() {
    return this.features.map((feature: any) => {
      const Description = _.truncate(feature.place_name, {
        'length': this.descriptionLimit,
        'omission': '...'
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
        value: mappedModel[key] || 'n/a'
      };
    });
  }
}
