import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Mva10SelectFieldModel } from 'mva10-angular';
import { CovidService } from '../../../core/services/covid.service';

@Component({
	selector: 'app-country',
	templateUrl: './country.component.html',
	styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
	public countryForm: FormGroup;
	public showResult: boolean;
	public countriesSelect = {
		text: 'Country',
		options: [
			{ value: 'spain', text: 'Spain' },
			{ value: 'france', text: 'France' },
			{ value: 'italy', text: 'Italy' }
		]
	};
	public dateInitList = {
		text: 'Period',
		options: [
			{ value: 1, text: 'Hoy' },
			{ value: 7, text: '7 días' },
			{ value: 15, text: '15 días' },
			{ value: 30, text: '1 mes' }
		]
	};

	constructor(private covidService: CovidService) {
		this.showResult = false;
	}

	ngOnInit(): void {
		this.countryForm = new FormGroup({
			country: new FormControl(''),
			dateInit: new FormControl(''),
			dateEnd: new FormControl('')
		});
	}

	getCountry(event: Event) {
		this.countryForm.controls['country'].setValue(event);
	}

	getDate(event: number) {
		let today = new Date();
		let date_to = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString();

		let date_from: string = '';
		switch (event) {
			case 1:
				date_from = date_to;
				break;
			case 7:
				date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 7).toString();
				break;
			case 15:
				date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - 15).toString();
				break;
			case 30:
				date_from = today.getFullYear() + '-' + today.getMonth().toString() + '-' + today.getDate().toString();
				break;
		}

		this.countryForm.controls['dateFrom'].setValue(date_from);
		this.countryForm.controls['dateTo'].setValue(date_to);
	}

	onSubmit() {}
}
