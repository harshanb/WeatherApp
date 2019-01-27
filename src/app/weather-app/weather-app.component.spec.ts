import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { WeatherAppComponent } from './weather-app.component';
import { OpenweatherapiService } from '../services/openweatherapi.service';
import { DisplaydetailsComponent } from '../displaydetails/displaydetails.component';
import { DataService } from '../services/data.service';

describe('WeatherAppComponent', () => {
	let component: WeatherAppComponent;
	let fixture: ComponentFixture<WeatherAppComponent>;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [DataService] });
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DisplaydetailsComponent, WeatherAppComponent],
			imports: [HttpClientModule],
			providers: [OpenweatherapiService],
		}).compileComponents();
	}));

	beforeEach(async(() => {
		fixture = TestBed.createComponent(WeatherAppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', async(() => {
		expect(component).toBeTruthy();
	}));

	it('should define "Description"', async(() => {
		const app = fixture.debugElement.componentInstance;
		expect(app.weatherDescription).toBeDefined();
	}));
	it('should define "Speed"', async(() => {
		const app = fixture.debugElement.componentInstance;
		expect(app.windSpeed).toBeDefined();
	}));
	it('should define "name"', async(() => {
		const app = fixture.debugElement.componentInstance;
		expect(app.location).toBeDefined();
	}));
	it('should define "fTemp"', async(() => {
		const app = fixture.debugElement.componentInstance;
		expect(app.tempInFht).toBeDefined();
	}));
	it('should define "cTemp"', async(() => {
		const app = fixture.debugElement.componentInstance;
		expect(app.tempInCels).toBeDefined();
	}));
	it('should call the getDetails function', async(() => {
		spyOn(component, 'getDetails');
		el = fixture.debugElement.query(By.css('button')).nativeElement;
		el.click();
		expect(component.getDetails).toHaveBeenCalled();
	}));
	it('should define "getDetails" function', async(() => {
		spyOn(component, 'getDetails').and.callThrough();
		component.getDetails(0, 0);
		expect(component.getDetails).toHaveBeenCalled();
	}));

	it('The OpenWeatherApi service needs to be mocked', async(() => {
		inject([OpenweatherapiService], (service: OpenweatherapiService) => {
			var expected = [
				{
					coord: { lon: 12, lat: 10 },
					weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
					base: 'stations',
					main: {
						temp: 296.99,
						pressure: 982.55,
						humidity: 26,
						temp_min: 296.99,
						temp_max: 296.99,
						sea_level: 1028.57,
						grnd_level: 982.55,
					},
					wind: { speed: 5.05, deg: 44.0063 },
					clouds: { all: 0 },
					dt: 1546855844,
					sys: { message: 0.0038, country: 'NG', sunrise: 1546839071, sunset: 1546880731 },
					id: 2323344,
					name: 'Shani',
					cod: 200,
				},
			];

			const spy = spyOn(service, 'getConfig').and.returnValue(Promise.resolve(expected));

			component.getDetails(10, 12);

			fixture.detectChanges();

			fixture.whenStable().then(() => {
				expect(component.weatherDescription).toBeDefined();
				expect(component.windSpeed).toBeDefined();
				expect(component.location).toBeDefined();
				expect(component.tempInFht).toBeDefined();
				expect(component.tempInCels).toBeDefined();
			});
		});
	}));
	it('The OpenWeatherApi service needs to be mocked for null', async(() => {
		inject([OpenweatherapiService, DataService], (service: OpenweatherapiService, dataservice: DataService) => {
			var expected = [
				{
					"cod": "400",
					"message": "Nothing to geocode"
				}
			];
			const spy = spyOn(service, 'getConfig').and.returnValue(Promise.resolve(expected));

			component.getDetails('', '');

			fixture.detectChanges();
			fixture.whenStable().then(() => {
				expect(component.weatherDescription).toBeNull();
				expect(component.windSpeed).toBeNull();
				expect(component.location).toBeNull();
				expect(component.tempInFht).toBeNull();
				expect(component.tempInCels).toBeNull();

			});
		});
	}));
});
