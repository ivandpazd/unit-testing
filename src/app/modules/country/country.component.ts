import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Mva10SelectFieldModel } from 'mva10-angular';
import { CovidService } from '../../core/services/covid.service';

@Component({
	selector: 'app-country',
	templateUrl: './country.component.html',
	styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
	public countryForm: FormGroup;
	public showResult: boolean;
	public countriesList: Array<Mva10SelectFieldModel> = [
		{ value: 'spain', name: 'Spain', checked: false },
		{ value: 'france', name: 'France', checked: false },
		{ value: 'italy', name: 'Italy', checked: false }
	];
	public dateInitList: Array<Mva10SelectFieldModel> = [
		{ value: '2020-03-10', name: 'Primera ola', checked: false },
		{ value: '2020-08-10', name: 'Segunda ola', checked: false }
	];
	public dateEndList: Array<Mva10SelectFieldModel> = [
		{ value: '2020-07-01', name: 'Primera ola', checked: false },
		{ value: '2020-10-10', name: 'Segunda ola', checked: false }
	];

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

	getDateInit(event: Event) {
		console.log(event);
		this.countryForm.controls['dateInit'].setValue(event);
	}

	getDateEnd(event: Event) {
		this.countryForm.controls['dateEnd'].setValue(event);
	}

	dateChange(event: Event) {
		console.log(event);
	}

	onSubmit() {}
}
