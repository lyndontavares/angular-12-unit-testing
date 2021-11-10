import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-basic',
  templateUrl: './banner-basic.component.html',
  styleUrls: ['./banner-basic.component.css']
})
export class BannerBasicComponent implements OnInit {

  title = 'Angular Testing';

  constructor() { }

  ngOnInit(): void {
  }

}
