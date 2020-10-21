import { Component, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SelectOption } from '../../models/select';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges {
	public open: boolean = false;
	public value: string = '';
	public disabled: boolean = false;

	@Input() text: string;
	@Input() options: Array<SelectOption>;
	@Output() selectedValue = new EventEmitter<number | string>();

	constructor() {}

	ngOnChanges() {
		this.value = this.text;
		this.disabled = this.options.length < 1;
	}

	public emitDocumentType(option: SelectOption): void {
		this.value = option.text;
		this.selectedValue.emit(option.value);
	}
}
