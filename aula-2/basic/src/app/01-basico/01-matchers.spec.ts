// demonstrar matchers com jasmine

describe('01-demonstração de matchers com jasmine', () => {

    it('deve demonstrar o uso do toBe', () => {
        const nome = 'João';
        expect(nome).toBe('João');
    });

    it('deve demonstrar o uso do toBeFalsy', () => {
        const nome = '';
        expect(nome).toBeFalsy();
    });

    it('deve demonstrar o uso do toBeTruthy', () => {
        const nome = 'João';
        expect(nome).toBeTruthy();
    });

    it('deve demonstrar o uso do toEqual', () => {
        const pessoa = {
            nome: 'João',
            idade: 20
        };
        expect(pessoa).toEqual({
            nome: 'João',
            idade: 20
        });
    });

})
