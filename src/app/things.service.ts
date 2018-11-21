import { Injectable } from '@angular/core';
import { Thing } from './header/thing';
import { ThingData } from './header/ThingData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {

  constructor() { }
  getThings(): Observable<Thing[]> {
    return of(ThingData);
  }
}