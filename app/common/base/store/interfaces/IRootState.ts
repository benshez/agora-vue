import { IApplicationConfig } from "~/common/config/interfaces/IApplicationConfig";
import { IUser } from "@common/user/interfaces/IUser";
import { ILanguage } from "@common/i18n/interfaces/ILanguage";
import { IRoute } from "@common/router/interfaces/IRoute";
import { IDynanicComponent } from "@common/events/interfaces/IDynanicComponent";
import { ILocations } from "@common/search/interfaces/ILocations";

export interface IRootState {
	ApplicationConfig: IApplicationConfig;
	User: IUser;
	Language: ILanguage;
	Routes: IRoute;
	DynamicComponent: IDynanicComponent;
	Location: ILocations;
}
