import { getCountry } from "./funcoes.helper";


// 1. describe - define test suite, Create a group of specs (often called a suite)
describe('ArrayGetCountry', () => {

    // 2. it - define an individual unit test case
    it('should return supported country in array', () => {

        // 3. expect - Create an expectation/assertion for a spec
        expect(getCountry()).toContain('India');
        expect(getCountry()).toContain('Russia');
    })

    it('should return supported country in array', () => {

        const countryResult = getCountry();
        expect(countryResult).toContain('India');
        expect(countryResult).toContain('Israel');

    })

})
