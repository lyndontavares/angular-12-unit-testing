export class CounterComponent {

    public counter: number = 0;

    // increment
    public increaseCounter(): number {

        this.counter++;

        return this.counter;

    }

    // decrement
    public decreaseCounter(): number {

        this.counter--;

        return this.counter;

    }

} // class CounterComponent
