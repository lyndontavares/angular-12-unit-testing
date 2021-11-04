export class Calculadora {
    soma(a,b) {
        return a+b
    }
    divisao(a,b) {
        if ( b === 0 ) {
            throw('Erro: divisão por zero')
        }
        return a / b
    }
}
