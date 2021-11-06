import { SectionService } from './../../services/section.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
  }

  get icon(): string {
    return this.sectionService.sectionData.icon;
  }

  get title(): string {
    return this.sectionService.sectionData.title;
  }

  get routerUrl(): string {
    return this.sectionService.sectionData.routerUrl;
  }

}
