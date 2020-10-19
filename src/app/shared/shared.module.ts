import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
	declarations: [SelectComponent, LoadingComponent],
	exports: [SelectComponent, LoadingComponent],
	imports: [CommonModule]
})
export class SharedModule {}
