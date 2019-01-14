import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import axios from "axios";
import _ from "lodash";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState]
})
export default class AgoraSearchBase extends Vue {
  @Prop(Object) source: String;
  @Prop(Object) descriptionLimit: number = 120;
  @Prop(Object) loading: boolean = false;
  @Prop(Object) model: any = null;
  @Prop(Object) search: any = null;
  @Prop(Object) features: any = [];

  @Watch("search")
  async OnSearchChanged(val: string, oldVal: string) {
    if (this.items && this.items.length > 0) return;
    if (!val || val.length < 6) return;

    if (this.loading) return;

    this.loading = true;

    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${val}.json?access_token=`;

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
  get mapppedItems() {
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
