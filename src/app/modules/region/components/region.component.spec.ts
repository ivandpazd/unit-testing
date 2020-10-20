import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidService } from '../../../core/services/covid.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionComponent } from './region.component';
import { GenericModule } from 'mva10-angular';
import { SharedModule } from '../../../shared/shared.module';
import { of } from 'rxjs';
import * as regionItalyList from '../../../../assets/mocks/regionItalyList.json';
import * as regionSpainList from '../../../../assets/mocks/regionSpainList.json';
import * as regionItalyVenetoDataMock from '../../../../assets/mocks/regionItalyVenetoDataMock.json';

jest.mock('../../../core/services/covid.service');

describe('RegionComponent', () => {
	let component: RegionComponent;
	let fixture: ComponentFixture<RegionComponent>;
	let covidService: CovidService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegionComponent],
			imports: [SharedModule, ReactiveFormsModule, GenericModule],
			providers: [CovidService]
		}).compileComponents();
	});

	beforeEach(() => {
		covidService = TestBed.inject(CovidService);
		jest.spyOn(covidService, 'getRegionsByCountry').mockReturnValue(of(regionSpainList));
		jest.spyOn(covidService, 'getRegionByDate').mockReturnValue(of(regionItalyVenetoDataMock));
		fixture = TestBed.createComponent(RegionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set correct country and get regions', () => {
		component.setCountry('Spain');
		expect(component.regionForm.value['country']).toBe('Spain');
		expect(component.covidService.getRegionsByCountry).toHaveBeenCalled();
	});

	it('should return correct date 7', () => {
		component.setDate(7);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 7).toString();
		expect(component.regionForm.value['dateFrom']).toBe(date_from);
	});

	it('should return correct date 15', () => {
		component.setDate(15);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 15).toString();
		expect(component.regionForm.value['dateFrom']).toBe(date_from);
	});

	it('should return correct date 30', () => {
		component.setDate(30);
		const today = new Date();
		const date_from = today.getFullYear() + '-' + today.getMonth().toString() + '-' + today.getDate().toString();
		expect(component.regionForm.value['dateFrom']).toBe(date_from);
	});

	it('should submit data correctly', () => {
		jest.spyOn(covidService, 'getRegionsByCountry').mockReturnValue(of(regionItalyList));
		component.setCountry('Italy');
		component.setRegion('Veneto');
		component.setDate(15);
		component.onSubmit();
		expect(component.covidService.getRegionByDate).toHaveBeenCalled();
		expect(component.allDatesInfo.positive_confirmed).toBe(4522);
		expect(component.allDatesInfo.deaths).toBe(37);
		expect(component.allDatesInfo.intensive_care).toBe(15);
		expect(component.allDatesInfo.recovered).toBe(930);
	});
});
