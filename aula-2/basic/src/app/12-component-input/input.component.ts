import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: '{{message}}',
})
export class InputComponent implements OnInit {

  @Input() message: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
