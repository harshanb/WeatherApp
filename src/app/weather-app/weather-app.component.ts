import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OpenweatherapiService } from '../services/openweatherapi.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  providers: [OpenweatherapiService,DataService]

})
export class WeatherAppComponent implements OnInit{
  httpdata;
  description = '';
  speed = '';
  name = '';
  temp = '';
  fTemp = '';
  cTemp = '';
  
  
  constructor(private _OpenweatherapiService: OpenweatherapiService,private DataService:DataService) { }

  ngOnInit() {
    
  }
  //httpcall to subscribe weather details 
  getDetails(latitude,longitude){
     
    this._OpenweatherapiService.getConfig(latitude,longitude).subscribe((data) =>{
      this.httpdata= data;
      this.description=this.httpdata.weather[0].description;
      this.DataService.changeDesc(this.description);

      this.speed=(2.237*this.httpdata.wind.speed).toFixed(1) + " mph";
      this.DataService.changeSpeed(this.speed);
      this.name=this.httpdata.name;
      this.DataService.changeName(this.name);
      this.temp=this.httpdata.main.temp;
      this.fTemp=(this.httpdata.main.temp*(9/5)-459.67).toFixed(1)+ "  (°F)";
      this.DataService.changeFtemp(this.fTemp);
      this.cTemp=(this.httpdata.main.temp-273).toFixed(1) + "  (°C)";
      this.DataService.changeCtemp(this.cTemp);
     
    });
    this.ngOnInit();
    
  }
 
}
