import { SectionData } from './../models/section-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private _sectionData = new BehaviorSubject<SectionData>({
    icon: 'home',
    title: 'Home',
    routerUrl: ''
  })

  constructor() { }

  get sectionData(): SectionData {
    return this._sectionData.value;
  }

  set sectionData(sectionData: SectionData) {
    this._sectionData.next(sectionData);
  }
}
