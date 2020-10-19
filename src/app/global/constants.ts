import { environment } from '../../environments/environment';

export const API = {
	COUNTRY_BY_DATE: environment.COVID_API + 'country/{{country}}',
	REGION_BY_DATE: environment.COVID_API + 'country/{{country}}/region/{{region}}',
	REGIONS_BY_COUNTRY: environment.COVID_API + 'countries/{{country}}/regions'
};

export const GLOBAL_CONST = {
	EVENT_LOADING: 'loadingContent',
	TURN_ON: 'on',
	TURN_OFF: 'off'
};
