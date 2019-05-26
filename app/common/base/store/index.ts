import Vue from "vue";
import Vuex from "vuex";
import { IRootState } from "@common/base/store/interfaces/IRootState";
import { Config } from "@common/config/Config";
import Routes from "@common/router/store";
import Language from "@common/i18n/store";
import ApplicationConfiguration from "@common/config/store";
import DynamicComponent from "@common/events/store";
import Location from "@common/search/store";
import GeoLocation from "@common/location/store";
import AgoraMapbox from "@common/map/store";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>(
	{
		modules: { ApplicationConfiguration, Routes, Language, DynamicComponent, Location, GeoLocation, AgoraMapbox },
		strict: Config.APP_SETTINGS.STORE_STRICT_MODE
	}
);
