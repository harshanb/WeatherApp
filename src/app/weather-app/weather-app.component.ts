import { Component, OnInit } from '@angular/core';
import { OpenweatherapiService } from '../services/openweatherapi.service';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-weather-app',
	templateUrl: './weather-app.component.html',
	styleUrls: ['./weather-app.component.css'],
	providers: [OpenweatherapiService, DataService],
})
export class WeatherAppComponent implements OnInit {
	weatherInfo;
	weatherDescription = '';
	windSpeed = '';
	location = '';
	tempInFht = '';
	tempInCels = '';
	data: any;

	constructor(private _OpenweatherapiService: OpenweatherapiService, private DataService: DataService) { }

	ngOnInit() { }
	//httpcall to subscribe weather details
	getDetails(latitude, longitude) {
		this._OpenweatherapiService.getConfig(latitude, longitude).subscribe((data: string) => {
			this.weatherInfo = data;
			this.getWeatherDescription(this.weatherInfo.weather[0].description);
			this.getWindSpeed((2.237 * this.weatherInfo.wind.speed).toFixed(1) + ' mph');
			this.getLocation(this.weatherInfo.name);
			this.getTempInFht((this.weatherInfo.main.temp * (9 / 5) - 459.67).toFixed(1) + '  (°F)');
			this.getTempInCels((this.weatherInfo.main.temp - 273).toFixed(1) + '  (°C)');


		},
			(error) => {
				this.getWeatherDescription('An error occured with status:' + error.status + ' ' + error.statusText);
				this.getWindSpeed('An error occured with status:' + error.status + ' ' + error.statusText);
				this.getLocation('An error occured with status:' + error.status + ' ' + error.statusText);
				this.getTempInFht('An error occured with status:' + error.status + ' ' + error.statusText);
				this.getTempInCels('An error occured with status:' + error.status + ' ' + error.statusText);
			}
		);
		this.ngOnInit();
	}
	getWeatherDescription(desc: string) {
		this.weatherDescription = desc;
		this.DataService.changeDesc(this.weatherDescription);

	}
	getWindSpeed(speed: string) {
		this.windSpeed = speed;
		this.DataService.changeSpeed(this.windSpeed);
	}
	getLocation(location: string) {
		this.location = location;
		this.DataService.changeLocation(this.location);
	}
	getTempInFht(tempInFht: string) {
		this.tempInFht = tempInFht
		this.DataService.changeTempInFht(this.tempInFht);
	}
	getTempInCels(tempInCels: string) {
		this.tempInCels = tempInCels;
		this.DataService.changeTempInCels(this.tempInCels);
	}






}
