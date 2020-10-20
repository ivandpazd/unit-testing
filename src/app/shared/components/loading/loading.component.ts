import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event.emitter.service';
import { GLOBAL_CONST } from '../../../global/constants';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
	public show: boolean = true;

	constructor() {}

	ngOnInit(): void {
		EventEmitterService.get(GLOBAL_CONST.EVENT_LOADING).subscribe((res: string) => {
			this.callbackListener(res);
		});
	}

	public callbackListener(payload: string) {
		this.show = payload === 'on';
	}
}
