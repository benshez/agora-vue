import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { Config } from "@common/config/Config";
import { IAgoraMapbox } from "@common/map/interfaces/IAgoraMapbox";
import {
    SET_AGORA_MAP_CENTER,
    SET_AGORA_MAP_MARKERS
} from "@common/base/store/MutationTypes";
import { IMarkers } from "@common/map/interfaces/IMarkers";
import { ICenter } from "@common/map/interfaces/ICenter";

@Module({ name: "AgoraMapbox", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class AgoraMapbox extends VuexModule {
    current: IAgoraMapbox = {
        center: { center: null },
        markers: null
    }

    @Mutation [SET_AGORA_MAP_CENTER](center: ICenter) {
        this.current.center.center = center.center;
    }

    @Mutation [SET_AGORA_MAP_MARKERS](markers: Array<IMarkers>) {
        this.current.markers = markers;
    }
    @Action({ commit: SET_AGORA_MAP_CENTER }) setCenter(center: ICenter): ICenter {
        return center;
    }

    @Action({ commit: SET_AGORA_MAP_MARKERS }) setMarkers(markers: Array<IMarkers>): Array<IMarkers> {
        return markers;
    }
}

export const getStore = (store?: Store<IAgoraMapbox>): AgoraMapbox => getModule(AgoraMapbox, store);