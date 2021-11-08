import { greetingsTo } from "./funcoes.helper";

describe('GreetingString', () => {

    // 2. it - define an individual unit test case
    it('deve testar a função `greetingsTo´', () => {
        expect(greetingsTo('Lyndon Tavares')).toContain('Welcome Lyndon Tavares');
    })

})
