import { EventCounterComponent } from "./event-counter.component";

describe('EventCounterComponent', () => {

    let eventCounterComponent: EventCounterComponent;

    beforeEach(() => {

        eventCounterComponent = new EventCounterComponent();

    })

    it('should raise counterChanged event when incrementCounter fired', () => {

        let totalCounter = 0;
        eventCounterComponent.counterChanged.subscribe(_totalCount => {

            totalCounter = _totalCount;

            eventCounterComponent.incrementCounter();

            expect(totalCounter).toBe(1);

        })

    })

})
