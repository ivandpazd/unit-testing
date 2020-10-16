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

	private static setDateOptions(dateTo: string, dateFrom: string): { params: HttpParams } {
		const params: HttpParams = new HttpParams().append('date_from', dateFrom).append('date_to', dateTo);
		return {
			params: params
		};
	}
}
