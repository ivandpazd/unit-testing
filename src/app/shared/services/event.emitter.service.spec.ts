import { TestBed } from '@angular/core/testing';
import { EventEmitterService } from './event.emitter.service';

describe('EventEmitterService', () => {
	let service: EventEmitterService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EventEmitterService]
		});
		service = TestBed.inject(EventEmitterService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
