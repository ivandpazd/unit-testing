import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SelectOption } from '../../models/select';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	public open: boolean = false;
	public value: string = '';

	@Input() text: string;
	@Input() options: Array<SelectOption>;
	@Output() selectedValue = new EventEmitter<number | string>();

	constructor() {}

	ngOnInit(): void {
		this.value = this.text;
	}

	public emitDocumentType(option: SelectOption): void {
		this.value = option.text;
		this.selectedValue.emit(option.value);
	}
}
