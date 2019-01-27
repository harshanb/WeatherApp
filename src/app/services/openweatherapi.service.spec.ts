import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { OpenweatherapiService } from './openweatherapi.service';

describe('OpenweatherapiService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		})
	);

	it('should be created', () => {
		const service: OpenweatherapiService = TestBed.get(OpenweatherapiService);
		expect(service).toBeTruthy();
	});
	it('getConfig should return some value', () => {
		const service: OpenweatherapiService = TestBed.get(OpenweatherapiService);
		expect(service).toBeTruthy();
	});
});
