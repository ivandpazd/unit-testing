import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RegionRoutingModule } from './region-routing.module';
import { MainCoreModule } from '../../core/core.module';
import { GenericModule } from 'mva10-angular';

@NgModule({
	declarations: [RegionComponent],
	imports: [CommonModule, RegionRoutingModule, MainCoreModule, GenericModule]
})
export class RegionModule {}
