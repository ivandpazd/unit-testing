import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule, GenericModule } from 'mva10-angular';

@NgModule({
	declarations: [AppComponent],
	imports: [RouterModule, BrowserModule, HttpClientModule, AppRoutingModule, CoreModule, GenericModule, MainCoreModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
