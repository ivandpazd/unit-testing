import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';

@NgModule({
	declarations: [SelectComponent],
	exports: [SelectComponent],
	imports: [CommonModule]
})
export class SharedModule {}
