import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';
import { GenericModule } from 'mva10-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [CountryComponent],
	imports: [CommonModule, CountryRoutingModule, GenericModule, ReactiveFormsModule]
})
export class CountryModule {}
