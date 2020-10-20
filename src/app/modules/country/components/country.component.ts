import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CovidService } from '../../../core/services/covid.service';
import { GLOBAL_CONST } from '../../../global/constants';
import { EventEmitterService } from '../../../shared/services/event.emitter.service';

@Component({
	selector: 'app-country',
	templateUrl: './country.component.html',
	styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
	public countryForm: FormGroup;
	public showResult: boolean;
	public isLoad: boolean = true;

	public allDatesInfo = {
		positive_confirmed: 0,
		deaths: 0,
		intensive_care: 0,
		recovered: 0
	};

	public countriesSelect = {
		text: 'Country',
		options: [
			{ value: 'Spain', text: 'Spain' },
			{ value: 'France', text: 'France' },
			{ value: 'Italy', text: 'Italy' }
		]
	};
	public dateInitList = {
		text: 'Period',
		options: [
			{ value: 1, text: 'Today' },
			{ value: 7, text: '7 days' },
			{ value: 15, text: '15 days' },
			{ value: 30, text: '1 month' }
		]
	};

	constructor(public covidService: CovidService) {
		this.showResult = false;
	}

	ngOnInit(): void {
		this.countryForm = new FormGroup({
			country: new FormControl('', Validators.required),
			dateFrom: new FormControl('', Validators.required),
			dateTo: new FormControl('', Validators.required)
		});
	}

	getCountry(event: String) {
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

	onSubmit() {
		this.isLoad = false;
		this.showResult = false;
		EventEmitterService.get(GLOBAL_CONST.EVENT_LOADING).emit(GLOBAL_CONST.TURN_ON);
		this.covidService
			.getCountryByDate(this.countryForm.value['country'], this.countryForm.value['dateFrom'], this.countryForm.value['dateTo'])
			.subscribe((covidData) => {
				console.log(covidData);
				if (covidData) {
					this.showResult = true;
					let values = Object.values(covidData.dates);
					for (let i = 0; i < Object.keys(covidData.dates).length - 1; i++) {
						let dayValues = values[i]['countries'][this.countryForm.value['country']];

						this.allDatesInfo.positive_confirmed += dayValues.today_new_confirmed;
						this.allDatesInfo.deaths += dayValues.today_new_deaths;
						this.allDatesInfo.intensive_care += dayValues.today_new_intensive_care;
						this.allDatesInfo.recovered += dayValues.today_new_recovered;
					}
					EventEmitterService.get(GLOBAL_CONST.EVENT_LOADING).emit(GLOBAL_CONST.TURN_OFF);
					this.isLoad = true;
				}
			});
	}
}
