import {
    Vue,
    Component,
    Prop,
    Mixins,
    Inject
} from "vue-property-decorator";

import RootState from "@common/base/store/mixins/RootState";

@Component
export default class AgoraMapboxLayerBase extends Mixins(RootState) {
    @Inject() readonly mapbox!: any;
    @Prop({ default: null }) map!: any;
    @Prop({ default: true }) initial: boolean;
    created() {

    }
}