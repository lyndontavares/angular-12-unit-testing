/*
    ❏ and.returnValue serve para informar ao spy o valor de retorno de
    determinado método
    ❏ and.returnValue deve ser aplicado ao objeto spy
*/
describe("Suíte de testes do tópico 11.6", function () {
    var calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(calculadora, "somar").and.returnValue(10);
    });
    it("deve validar o uso do 'and.returnValue'", function () {
        expect(calculadora.somar(5, 2)).toEqual(10);
        expect(calculadora.somar).toHaveBeenCalled();
    });
});

/*
    ❏ and.returnValues serve para informar ao spy quais os valores a serem
    retornados por chamada
    ❏ and.returnValues aceita como parâmetro um ou mais valores, separados por
    vírgula
    ❏ Se o número de chamadas for maior do que o de valores a serem retornados,
        será retornado “undefined”
    ❏ and.returnValues deve ser aplicado ao objeto spy
*/

describe("Suíte de testes do tópico 11.7", function () {
    var calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(calculadora, "somar").and.returnValues(10, 20);
    });
    it("deve validar o uso do 'and.returnValues'", function () {
        expect(calculadora.somar(5, 2)).toEqual(10);
        expect(calculadora.somar(5, 2)).toEqual(20);
        expect(calculadora.somar(5, 2)).toBeUndefined();
        expect(calculadora.somar).toHaveBeenCalledTimes(3);
    });
});

/*
    and.callFake serve para definir uma nova implementação para um método de
    um spy
    ❏ and.callFake deve ser aplicado ao objeto spy
    ❏ and.callFake recebe como parâmetro uma função com a nova implementação
    a ser executada quando o método for chamado
*/

describe("Suíte de testes do tópico 11.8", function () {
    var calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(calculadora, "somar").and.callFake(
            function (n1, n2) {
                return n1 * n2;
            });
    });
    it("deve validar o uso do 'and.callFake'", function () {
        expect(calculadora.somar(5, 2)).toEqual(10);
        expect(calculadora.somar).toHaveBeenCalled();
    });
});

/*
    ❏ and.throwError serve para informar ao spy que determinado método deve
    lançar um erro ao ser executado
    ❏ and.throwError deve ser aplicado ao objeto spy
    ❏ and.throwError recebe como parâmetro uma string contendo a mensagem de
    erro a ser lançada
*/

describe("Suíte de testes do tópico 11.9", function () {
    var calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(calculadora, "somar").and.throwError(
            "valores inválidos");
    });
    it("deve validar o uso do 'and.throwError'", function () {
        expect(function () { calculadora.somar(5, 2); }).
            toThrowError("valores inválidos");
        expect(calculadora.somar).toHaveBeenCalled();
    });
});
