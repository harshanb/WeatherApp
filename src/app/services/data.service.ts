import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
	constructor() {}
	private weatherDescription = new BehaviorSubject('NA');
	descId = this.weatherDescription.asObservable();
	private windSpeed = new BehaviorSubject('NA');
	speedId = this.windSpeed.asObservable();
	private location = new BehaviorSubject('NA');
	locationId = this.location.asObservable();
	private tempInFht = new BehaviorSubject('NA');
	tempFhtId = this.tempInFht.asObservable();
	private tempInCels = new BehaviorSubject('NA');
	tempCelsId = this.tempInCels.asObservable();

	changeDesc(desc: string) {
		this.weatherDescription.next(desc);
	}
	getDesc() {
		return this.descId;
	}

	changeSpeed(sp: string) {
		this.windSpeed.next(sp);
	}
	getSpeed() {
		return this.speedId;
	}

	changeLocation(name: string) {
		this.location.next(name);
	}
	getLocation() {
		return this.locationId;
	}
	changeTempInFht(ftemp: string) {
		this.tempInFht.next(ftemp);
	}
	getTempInFht() {
		return this.tempFhtId;
	}
	changeTempInCels(ctemp: string) {
		this.tempInCels.next(ctemp);
	}
	getTempInCels() {
		return this.tempCelsId;
	}
}
