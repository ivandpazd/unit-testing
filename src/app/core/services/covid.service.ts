import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../global/constants';

@Injectable({
	providedIn: 'root'
})
export class CovidService {
	constructor(private _http: HttpClient) {}

	getCountryByDate(country: string, dateTo: string, dateFrom: string) {
		const url = API.COUNTRY_BY_DATE.replace('{{country}}', country);
		return this._http.get(url);
	}

	getRegionByDate(country: string, region: string, dateTo: string, dateFrom: string) {
		let url = API.REGION_BY_DATE.replace('{{country}}', country);
		url = url.replace('{{region}}', region);
		return this._http.get(url);
	}
}
