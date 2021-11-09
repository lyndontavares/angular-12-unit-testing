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

    it('deve demonstrar o uso do toContain', () => {
        const nomes = ['João', 'Maria', 'José'];
        expect(nomes).toContain('Maria');
    });

    it('deve demonstrar o uso do toMatch', () => {
        const nome = 'João';
        expect(nome).toMatch(/Jo/);
    });

    it('deve demonstrar o uso do toBeDefined', () => {
        const nome = 'João';
        expect(nome).toBeDefined();
    });

    it('deve demonstrar o uso do toBeUndefined', () => {
        const nome = undefined;
        expect(nome).toBeUndefined();
    });

    it('deve demonstrar o uso do toBeNull', () => {
        const nome = null;
        expect(nome).toBeNull();
    });

    it('deve demonstrar o uso do toBeGreaterThan', () => {
        const idade = 20;
        expect(idade).toBeGreaterThan(19);
    });

    it('deve demonstrar o uso do toBeLessThan', () => {
        const idade = 20;
        expect(idade).toBeLessThan(21);
    });

    it('deve demonstrar o uso do toBeCloseTo', () => {
        const preco = 19.99;
        expect(preco).toBeCloseTo(20, 1);
    });

    it('deve demonstrar o uso do toThrow', () => {
        const func = () => {
            throw new Error('Erro inesperado');
        };
        expect(func).toThrow();
    });

    it('deve demonstrar o uso do toThrowError', () => {
        const func = () => {
            throw new Error('Erro inesperado');
        };
        expect(func).toThrowError('Erro inesperado');
    });

    it('deve demonstrar o uso do toThrowErrorMensagem', () => {
        const func = () => {
            throw new Error('Erro inesperado');
        };
        expect(func).toThrowError(Error);
    });

    it('deve demonstrar o uso do toThrowErrorMensagem', () => {
        const func = () => {
            throw new Error('Erro inesperado');
        };
        expect(func).toThrowError(Error, 'Erro inesperado');
    });

})
