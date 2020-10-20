import { CovidService } from './covid.service';
import { HttpClient } from '@angular/common/http';

jest.mock('@angular/common/http');

describe('CovidService', () => {
	let covidService: CovidService;
	let httpClient: HttpClient;

	beforeEach(() => {
		httpClient = new HttpClient({} as any);
		covidService = new CovidService(httpClient);
	});

	it('should be created', () => {
		expect(covidService).toBeTruthy();
	});
});
