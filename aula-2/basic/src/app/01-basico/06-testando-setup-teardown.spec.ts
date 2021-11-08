import { sayHello } from "./funcoes.helper";

describe('Say Hello', () => {

    let expectedResult = '';

    // setup - initialize objects and variables
    beforeEach(() => {
        expectedResult = 'Hello World!!!';
        console.log('setup beforeEach', expectedResult);
    })

    // teardown - reset object/variable value
    afterEach(() => {
        expectedResult = '';
        console.log('teardown afterEach', expectedResult);
    })

    // 2. it - define an individual unit test case
    it('should says Hello World', () => {

        // 3. expect - Create an expectation/assertion for a spec
        expect(sayHello())

            .toEqual(expectedResult);

    })

})
