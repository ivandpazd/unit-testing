export interface CovidInfo {
	positive_confirmed: number;
	deaths: number;
	intensive_care: number;
	recovered: number;
}

export class CovidInfo implements CovidInfo {
	positive_confirmed = 0;
	deaths = 0;
	intensive_care = 0;
	recovered = 0;
}
