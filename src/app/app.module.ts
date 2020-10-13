import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCoreModule } from './core/core.module';
import { CoreModule, GenericModule } from 'mva10-angular';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, CoreModule, GenericModule, MainCoreModule],
	exports: [MainCoreModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
