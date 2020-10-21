import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../global/api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CovidService {
	constructor(private _http: HttpClient) {}

	public getCountryByDate(country: string, dateTo: string, dateFrom: string): Observable<any> {
		const params = '?date_from=' + dateFrom + '&date_to=' + dateTo;
		let url = API.COUNTRY_BY_DATE.replace('{{country}}', country);
		url += params;
		return this._http.get(url);
	}

	public getRegionByDate(country: string, region: string, dateTo: string, dateFrom: string): Observable<any> {
		const params = '?date_from=' + dateFrom + '&date_to=' + dateTo;
		let url = API.REGION_BY_DATE.replace('{{country}}', country);
		url = url.replace('{{region}}', region);
		url += params;
		return this._http.get(url);
	}

	public getRegionsByCountry(country: string): Observable<any> {
		let url = API.REGIONS_BY_COUNTRY.replace('{{country}}', country);
		return this._http.get(url);
	}
}
