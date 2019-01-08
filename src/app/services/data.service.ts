import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {
  constructor() {}
  private description = new BehaviorSubject('NA');
  descId = this.description.asObservable();
  private speed = new BehaviorSubject('NA');
  speedId = this.speed.asObservable();
  private name = new BehaviorSubject('NA');
  nameId = this.name.asObservable();
  private fTemp = new BehaviorSubject('NA');
  ftempId = this.fTemp.asObservable();
  private cTemp = new BehaviorSubject('NA');
  ctempId = this.cTemp.asObservable();

  changeDesc(desc: string) {
       this.description.next(desc)
  }
  getDesc(){
      return this.descId;
  }

  changeSpeed(sp: string) {
    this.speed.next(sp)
  }
  getSpeed(){
    return this.speedId;
  }

  changeName(name: string) {
    this.name.next(name)
  }
  getName(){
    return this.nameId;
  }
  changeFtemp(ftemp: string) {
    this.fTemp.next(ftemp)
  }
  getFtemp(){
    return this.ftempId;
  }
  changeCtemp(ctemp: string) {
    this.cTemp.next(ctemp)
  }
  getCtemp(){
    return this.ctempId;
  }
  
  
}