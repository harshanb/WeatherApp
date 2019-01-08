import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import{} from 'jasmine'
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

import { WeatherAppComponent } from './weather-app.component';
import { OpenweatherapiService } from '../services/openweatherapi.service';
import { DebugElement } from '@angular/core';
import { DisplaydetailsComponent } from '../displaydetails/displaydetails.component';
import { DataService } from '../services/data.service';

describe('WeatherAppComponent', () => {
  let component: WeatherAppComponent;
  let fixture: ComponentFixture<WeatherAppComponent>;
  let de:DebugElement;
  let el:HTMLElement;
  let apiservice: OpenweatherapiService
  let dataservice: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DataService] });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydetailsComponent,WeatherAppComponent ],
      imports:[HttpClientModule],
      providers: [OpenweatherapiService],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  


  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
  
  it('should define "Description"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.description).toBeDefined();

  }));
  it('should define "Speed"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.speed).toBeDefined();

  }));
  it('should define "name"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toBeDefined();

  }));
  it('should define "Temp"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.temp).toBeDefined();

  }));
  it('should define "fTemp"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.fTemp).toBeDefined();

  }));
  it('should define "cTemp"',async(() =>{
    const app = fixture.debugElement.componentInstance;
    expect(app.cTemp).toBeDefined();

  }));
  it('should call the getDetails function',async(() =>{
    spyOn(component,'getDetails')
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.getDetails).toHaveBeenCalled();

  }));
  it('should define "getDetails" function',async(() =>{
    spyOn(component,'getDetails').and.callThrough();
    component.getDetails(0,0);
    expect(component.getDetails).toHaveBeenCalled();
    

  }));
  
  it('The OpenWeatherApi service needs to be mocked',async(() =>{
    inject([OpenweatherapiService], (service: OpenweatherapiService) => {
        var expected = [
            {
              "coord":{"lon":12,"lat":10},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":296.99,"pressure":982.55,"humidity":26,"temp_min":296.99,"temp_max":296.99,"sea_level":1028.57,"grnd_level":982.55},"wind":{"speed":5.05,"deg":44.0063},"clouds":{"all":0},"dt":1546855844,"sys":{"message":0.0038,"country":"NG","sunrise":1546839071,"sunset":1546880731},"id":2323344,"name":"Shani","cod":200
            }
        ];

        const spy = spyOn(service, 'getConfig').and.returnValue(Promise.resolve(expected));            

        
        component.getDetails(10,12);

        fixture.detectChanges();

        
        fixture.whenStable().then(() => {
          expect(component.description).toBeDefined();
          expect(component.speed).toBeDefined();
          expect(component.name).toBeDefined();
          expect(component.temp).toBeDefined();
          expect(component.fTemp).toBeDefined();
          expect(component.cTemp).toBeDefined();
       
            });
        
    })
  }));
  

});
