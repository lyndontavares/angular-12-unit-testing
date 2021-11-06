import { SectionService } from './../../services/section.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.sectionService.sectionData = {
      icon: 'home',
      title: 'Home',
      routerUrl: ''
    }
  }

}