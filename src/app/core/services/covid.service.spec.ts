import { CovidService } from './covid.service';
import { HttpClient } from '@angular/common/http';

jest.mock('@angular/common/http');

describe('CovidService', () => {
	let covidService: CovidService;
	let httpClient: HttpClient;

	beforeEach(() => {
		httpClient = new HttpClient({} as any);
		covidService = new CovidService(httpClient);
		jest.spyOn(httpClient, 'get');
	});

	it('should be created', () => {
		expect(covidService).toBeTruthy();
	});

	it('should call getCountryByDate with the expected url', () => {
		covidService.getCountryByDate('Spain', '2020-03-22', '2020-03-20');
		expect(httpClient.get).toHaveBeenCalledWith(
			'https://api.covid19tracking.narrativa.com/api/country/Spain?date_from=2020-03-20&date_to=2020-03-22'
		);
	});

	it('should call getRegionByDate with the expected url', () => {
		covidService.getRegionByDate('Spain', 'Madrid', '2020-03-22', '2020-03-20');
		expect(httpClient.get).toHaveBeenCalledWith(
			'https://api.covid19tracking.narrativa.com/api/country/Spain/region/Madrid?date_from=2020-03-20&date_to=2020-03-22'
		);
	});

	it('should call getRegionsByCountry with the expected url', () => {
		covidService.getRegionsByCountry('Spain');
		expect(httpClient.get).toHaveBeenCalledWith('https://api.covid19tracking.narrativa.com/api/countries/Spain/regions');
	});
});
