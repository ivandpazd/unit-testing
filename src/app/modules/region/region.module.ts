import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './components/region.component';
import { RegionRoutingModule } from './region-routing.module';
import { MainCoreModule } from '../../core/core.module';
import { GenericModule } from 'mva10-angular';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [RegionComponent],
	imports: [CommonModule, RegionRoutingModule, MainCoreModule, ReactiveFormsModule, GenericModule, SharedModule]
})
export class RegionModule {}
