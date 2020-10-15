import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CovidService } from './services/covid.service';
import { GenericModule } from 'mva10-angular';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HeaderComponent],
	providers: [CovidService],
	imports: [CommonModule, GenericModule, RouterModule],
	exports: [HeaderComponent]
})
export class MainCoreModule {}
