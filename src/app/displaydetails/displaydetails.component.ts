import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-displaydetails',
	templateUrl: './displaydetails.component.html',
	styleUrls: ['./displaydetails.component.css'],
})
export class DisplaydetailsComponent implements OnDestroy {
	subscription: Subscription;
	weatherDescription;
	windSpeed;
	location;
	tempInFht;
	tempInCels;

	constructor(private DataService: DataService) {
		this.subscription = this.DataService.getDesc().subscribe(weatherDescription => {
			this.weatherDescription = weatherDescription;
		});
		this.subscription.add(
			this.DataService.getSpeed().subscribe(windSpeed => {
				this.windSpeed = windSpeed;
			})
		);
		this.subscription.add(
			this.DataService.getLocation().subscribe(location => {
				this.location = location;
			})
		);
		this.subscription.add(
			this.DataService.getTempInFht().subscribe(tempInFht => {
				this.tempInFht = tempInFht;
			})
		);
		this.subscription.add(
			this.DataService.getTempInCels().subscribe(tempInCels => {
				this.tempInCels = tempInCels;
			})
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
