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
  

});
