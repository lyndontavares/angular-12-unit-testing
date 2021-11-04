import { Calculadora } from './calculadora'

describe('Teste operações da Calculadora', () => {


    var calculadora = new Calculadora()

    it( 'deverá testar operação soma', () => {
        //dados
        const a = 10
        const b = 20
        const esperado = a+b
        //ao efeturar
        const calculado = calculadora.soma(a,b)
        //espera ser obtido 30
        expect(calculado).toEqual(esperado)
    })

    it('deverá testar operação divisão com divisor diferente de zero', () => {
        //dados
        const a = 20
        const b = 2
        const esperado = a / b
        //ao efeturar
        const calculado = calculadora.divisao(a, b)
        //espera ser obtido 10
        expect(calculado).toEqual(esperado)
    })

    it('deverá testar operação divisão com divisor igual a zero', () => {
        //dados
        const a = 20
        const divisor = 0
        const esperado = a / divisor
        //espera ser obtido exceção
        expect(() => {
            calculadora.divisao(a, divisor)
        }).toThrow('Erro: divisão por zero')
    })


})
