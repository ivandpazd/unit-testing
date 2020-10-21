import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './country.component';
import { CovidService } from '../../core/services/covid.service';
import { SharedModule } from '../../shared/shared.module';
import { GenericModule } from 'mva10-angular';

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
});
