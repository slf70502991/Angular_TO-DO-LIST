import { Component, OnInit } from '@angular/core';
import { Thing } from '../header/thing';
import { ThingsService } from '../things.service';

@Component({
  selector: 'app-todothing',
  templateUrl: './todothing.component.html',
  styleUrls: ['./todothing.component.scss']
})
export class TodothingComponent implements OnInit {

  constructor(public thingService: ThingsService) { 
    
  }
 
  ngOnInit() {

    this.getThings();

  }
    
  
 thingdata:Thing[];
 
 
  getThings(): void {
    this.thingService.getThings().subscribe(things => this.thingdata=things);
  }

  selectedThing: Thing;

  onSelect(thing: Thing): void{
  this.selectedThing = thing;
  
  if(thing.is_selected){
    thing.is_selected = false;
  }else{
    thing.is_selected = true;
  }
  
}
  deleteThing(idx:number){
    this.thingdata.splice(idx, 1);
  }
}
