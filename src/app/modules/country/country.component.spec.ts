import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './country.component';
import { CovidService } from '../../core/services/covid.service';
import { SharedModule } from '../../shared/shared.module';
import { GenericModule } from 'mva10-angular';
import { of } from 'rxjs';
import * as countriesMock from '../../../assets/mocks/country.json';

jest.mock('../../core/services/covid.service');

describe('CountryComponent', () => {
	let component: CountryComponent;
	let fixture: ComponentFixture<CountryComponent>;
	let covidService: CovidService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CountryComponent],
			imports: [ReactiveFormsModule, SharedModule, GenericModule],
			providers: [CovidService]
		}).compileComponents();
	});

	beforeEach(() => {
		covidService = TestBed.inject(CovidService);
		fixture = TestBed.createComponent(CountryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return correct country', () => {
		component.setCountry('Spain');
		expect(component.countryForm.value['country']).toBe('Spain');
	});

	it('should return correct date 7', () => {
		component.setDate(7);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 7).toString();
		expect(component.countryForm.value['dateFrom']).toBe(date_from);
	});

	it('should return correct date 15', () => {
		component.setDate(15);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 15).toString();
		expect(component.countryForm.value['dateFrom']).toBe(date_from);
	});

	it('should return correct date 30', () => {
		component.setDate(30);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + today.getMonth().toString() + '-' + today.getDate().toString();
		expect(component.countryForm.value['dateFrom']).toBe(date_from);
	});

	it('should submit data correctly', () => {
		jest.spyOn(covidService, 'getCountryByDate').mockReturnValue(of(countriesMock));
		component.setCountry('Spain');
		component.setDate(7);
		component.onSubmit();
		expect(component.covidService.getCountryByDate).toHaveBeenCalled();
		expect(component.allDatesInfo.positive_confirmed).toBe(85481);
		expect(component.allDatesInfo.deaths).toBe(868);
		expect(component.allDatesInfo.intensive_care).toBe(140);
		expect(component.allDatesInfo.recovered).toBe(63);
	});
});
