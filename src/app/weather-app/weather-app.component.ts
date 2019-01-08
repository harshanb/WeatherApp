import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  httpdata;
  description = '';
  speed = '';
  name = '';
  temp = '';
  fTemp = '';
  cTemp = '';

  constructor() { }

  ngOnInit() {
  }

  getDetails()
  {
    
  }
}
