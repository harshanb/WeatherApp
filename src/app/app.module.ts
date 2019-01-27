import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

import { OpenweatherapiService } from './services/openweatherapi.service';
import { DataService } from './services/data.service';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    DisplaydetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [OpenweatherapiService, DataService]
  ,
  bootstrap: [AppComponent]

})
export class AppModule { }
