import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CovidService } from './services/covid.service';
import { GenericModule } from 'mva10-angular';

@NgModule({
	declarations: [HeaderComponent],
	providers: [CovidService],
	imports: [RouterModule, CommonModule, GenericModule],
	exports: [HeaderComponent]
})
export class MainCoreModule {}
