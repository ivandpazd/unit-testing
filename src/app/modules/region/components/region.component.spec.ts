import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidService } from '../../../core/services/covid.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionComponent } from './region.component';
import { GenericModule } from 'mva10-angular';
import { SharedModule } from '../../../shared/shared.module';

jest.mock('../../../core/services/covid.service');

describe('RegionComponent', () => {
	let component: RegionComponent;
	let fixture: ComponentFixture<RegionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegionComponent],
			imports: [SharedModule, ReactiveFormsModule, GenericModule],
			providers: [CovidService]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RegionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
