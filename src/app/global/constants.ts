import { environment } from '../../environments/environment';

export const API = {
	COUNTRY_BY_DATE: environment.COVID_API + 'country/{{country}}',
	REGION_BY_DATE: environment.COVID_API + 'country/{{country}}/region/{{region}}'
};
