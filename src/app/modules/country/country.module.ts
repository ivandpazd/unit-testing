import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';
import { GenericModule } from 'mva10-angular';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [CountryComponent],
	exports: [CountryComponent],
	imports: [CommonModule, CountryRoutingModule, GenericModule, ReactiveFormsModule, SharedModule]
})
export class CountryModule {}
