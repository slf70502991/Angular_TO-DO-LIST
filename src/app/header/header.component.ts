import { Component, OnInit } from '@angular/core';
import { ThingData } from './ThingData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    this.thingdata = ThingData;
 
  }
  thingdata=[];
  
 
  toAdd(input){
    let value = input.value;      
    if(value != '' && value!=null){           
       this.thingdata.push({
        is_selected: true,
        title:value
      });
      input.value = "";
    }else{ 
      alert('You must write something!');
    }            
  };

}
