import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CovidService } from '../../core/services/covid.service';
import { CovidInfo } from '../../shared/models/covidInfo';

@Component({
	selector: 'app-region',
	templateUrl: './region.component.html',
	styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
	public regionForm: FormGroup;
	public showResult: boolean;
	public isLoad: boolean = true;
	public isRegionsLoaded: boolean = true;

	public allDatesInfo: CovidInfo;

	public countriesSelect = {
		text: 'Country',
		options: [
			{ value: 'Spain', text: 'Spain' },
			{ value: 'France', text: 'France' },
			{ value: 'Italy', text: 'Italy' }
		]
	};

	public regionsSelect = {
		text: 'Regions',
		options: []
	};

	public dateInitList = {
		text: 'Period',
		options: [
			{ value: 7, text: '7 days' },
			{ value: 15, text: '15 days' },
			{ value: 30, text: '1 month' }
		]
	};

	constructor(public covidService: CovidService) {
		this.showResult = false;
		this.allDatesInfo = new CovidInfo();
	}

	ngOnInit(): void {
		this.regionForm = new FormGroup({
			country: new FormControl('', Validators.required),
			region: new FormControl('', Validators.required),
			dateFrom: new FormControl('', Validators.required),
			dateTo: new FormControl('', Validators.required)
		});
	}

	public setCountry(country: string): void {
		this.regionForm.controls['country'].setValue(country);
		this.getRegionsByCountry(country);
	}

	public getRegionsByCountry(country: string): void {
		this.isRegionsLoaded = false;
		this.covidService.getRegionsByCountry(country).subscribe((regions) => {
			if (regions) {
				this.regionsSelect.options = [];
				regions['countries'][0][country].forEach((reg) => {
					this.regionsSelect.options.push({ value: reg.id, text: reg.name });
				});
				this.isRegionsLoaded = true;
			}
		});
	}

	public setRegion(region: string): void {
		this.regionForm.controls['region'].setValue(region);
	}

	public setDate(range: number): void {
		let today = new Date();
		let date_to = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString();

		let date_from: string = '';
		switch (range) {
			case 7:
			case 15:
				date_from = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + (today.getDate() - range).toString();
				break;
			case 30:
				date_from = today.getFullYear() + '-' + today.getMonth().toString() + '-' + today.getDate().toString();
				break;
		}

		this.regionForm.controls['dateFrom'].setValue(date_from);
		this.regionForm.controls['dateTo'].setValue(date_to);
	}

	public onSubmit(): void {
		this.resetData();
		this.isLoad = false;
		this.showResult = false;
		this.covidService
			.getRegionByDate(
				this.regionForm.value['country'],
				this.regionForm.value['region'],
				this.regionForm.value['dateTo'],
				this.regionForm.value['dateFrom']
			)
			.subscribe((covidData) => {
				this.showResult = true;
				let values = Object.values(covidData?.dates);
				for (let i = 0; i < Object.keys(covidData?.dates).length - 1; i++) {
					let dayValues = values[i]['countries'][this.regionForm.value['country']]['regions'][0];

					this.allDatesInfo.positive_confirmed += dayValues?.today_new_confirmed;
					this.allDatesInfo.deaths += dayValues?.today_new_deaths;
					this.allDatesInfo.intensive_care += dayValues?.today_new_intensive_care;
					this.allDatesInfo.recovered += dayValues?.today_new_recovered;
				}
				this.isLoad = true;
			});
	}

	private resetData(): void {
		this.allDatesInfo.positive_confirmed = 0;
		this.allDatesInfo.deaths = 0;
		this.allDatesInfo.intensive_care = 0;
		this.allDatesInfo.recovered = 0;
	}
}
