import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../global/constants';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CovidService {
	constructor(private _http: HttpClient) {}

	public getCountryByDate(country: string, dateTo: string, dateFrom: string): Observable<any> {
		const options = CovidService.setDateOptions(dateFrom, dateTo);
		const url = API.COUNTRY_BY_DATE.replace('{{country}}', country);
		return this._http.get(url, options);
	}

	public getRegionByDate(country: string, region: string, dateTo: string, dateFrom: string): Observable<any> {
		const options = CovidService.setDateOptions(dateTo, dateFrom);
		let url = API.REGION_BY_DATE.replace('{{country}}', country);
		url = url.replace('{{region}}', region);
		return this._http.get(url, options);
	}

	public getRegionsByCountry(country: string) {
		let url = API.REGIONS_BY_COUNTRY.replace('{{country}}', country);
		return this._http.get(url);
	}

	private static setDateOptions(dateTo: string, dateFrom: string): { params: HttpParams } {
		const params: HttpParams = new HttpParams().set('date_from', dateFrom).set('date_to', dateTo);
		return {
			params: params
		};
	}
}
