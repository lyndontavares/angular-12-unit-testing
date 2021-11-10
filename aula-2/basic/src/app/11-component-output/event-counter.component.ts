import { EventEmitter } from "@angular/core";

export class EventCounterComponent {

    totalCount = 0;

    counterChanged = new EventEmitter();

    incrementCounter() {

        this.totalCount++;
        this.counterChanged.emit(this.totalCount);

    }

}
