import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
	let component: SelectComponent;
	let fixture: ComponentFixture<SelectComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SelectComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should stablish value of select', () => {
		component.emitDocumentType({ text: 'Spain', value: 'spain' });
		expect(component.value).toBe('Spain');
	});

	it('Should emit the selected option by output', () => {
		jest.spyOn(component.selectedValue, 'emit');
		component.emitDocumentType({ text: 'Spain', value: 'spain' });

		expect(component.selectedValue.emit).toHaveBeenCalled();
	});
});
