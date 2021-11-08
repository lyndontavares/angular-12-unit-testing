import { CounterComponent } from "./counter.component";

describe('03-counter component', () => {

    it('deve testar valor maior que zero', () => {
        let counterComponent = new CounterComponent();
        const currentValue = counterComponent.increaseCounter();
        expect(currentValue).toBeGreaterThan(0);
    });

});
