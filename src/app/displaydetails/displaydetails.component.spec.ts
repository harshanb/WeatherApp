import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydetailsComponent } from './displaydetails.component';
import { DataService } from '../services/data.service';

describe('DisplaydetailsComponent', () => {
  let component: DisplaydetailsComponent;
  let fixture: ComponentFixture<DisplaydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydetailsComponent ],
      providers: [DataService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
