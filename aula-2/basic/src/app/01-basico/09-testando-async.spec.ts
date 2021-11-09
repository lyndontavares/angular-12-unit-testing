import { fakeAsync, tick } from "@angular/core/testing";

describe('Testando código assíncrono', () => {


  // https://angular.io/guide/testing-components-scenarios#fake-async

  it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
    let called = false;
    setTimeout(() => {
      called = true;
    }, 100);
    tick(100);
    expect(called).toBe(true);
  }));

})
