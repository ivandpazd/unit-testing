import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
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
		if (this.options.length < 1) {
			this.disabled = true;
		} else {
			this.disabled = false;
		}
	}

	public emitDocumentType(option: SelectOption): void {
		this.value = option.text;
		this.selectedValue.emit(option.value);
	}
}
