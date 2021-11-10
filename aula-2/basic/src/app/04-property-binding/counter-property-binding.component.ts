import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-property-binding',
  templateUrl: './counter-property-binding.component.html',
  styleUrls: ['./counter-property-binding.component.css']
})
export class CounterPropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() othersCount = 0;
  @Input() myCount = 0;

  @Output() count = new EventEmitter();

  upCount() {
    if (this.myCount == 1)
      return;

    this.myCount++;

    this.count.emit({ myCount: this.myCount });
  }

  downCount() {
    if (this.myCount == -1)
      return;

    this.myCount--;

    this.count.emit({ myCount: this.myCount });
  }

  get totalCounts(): number {
    return this.othersCount + this.myCount;
  }

}
