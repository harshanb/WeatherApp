import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherapiService {
  
  apiKey="b86d21440d8c9a110912a2eb0845abb4";
  
  

  constructor(private http: HttpClient) {}

  getConfig(latitude,longitude)
  {
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon="+longitude+ "&appid=" +this.apiKey;
    return this.http.get(openWeatherURL)
  }

  
}
