import { IApplicationConfig } from '~/common/config/interfaces/IApplicationConfig';
import { Config } from '@common/config/Config';

export const state: IApplicationConfig = { ...Config };
