import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'country',
		loadChildren: () => import('./modules/country/country.module').then((m) => m.CountryModule)
	},
	{
		path: 'region',
		loadChildren: () => import('./modules/region/region.module').then((m) => m.RegionModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
