import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css'],
  
})
export class DisplaydetailsComponent implements OnDestroy {
  subscription:Subscription;
  description;
  speed;
  name;
  fTemp;
  cTemp;

  constructor(private DataService:DataService) {
    this.subscription=this.DataService.getDesc().subscribe(desc => { this.description=desc;});
    this.subscription.add(this.DataService.getSpeed().subscribe(sp =>{this.speed=sp;}));
    this.subscription.add(this.DataService.getName().subscribe(name =>{this.name=name;}));
    this.subscription.add(this.DataService.getFtemp().subscribe(ftemp => {this.fTemp =ftemp;}));
    this.subscription.add(this.DataService.getCtemp().subscribe(ctemp =>{this.cTemp=ctemp;}));
    
   }
  
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();

  }

}
