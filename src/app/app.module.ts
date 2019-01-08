import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { OpenweatherapiService } from './services/openweatherapi.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    DisplaydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OpenweatherapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
