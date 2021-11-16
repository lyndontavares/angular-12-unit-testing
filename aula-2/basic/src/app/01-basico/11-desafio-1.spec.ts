function soma(a, b) {
    return a + b;
}

describe('deve testar a função soma', () => {

    it('deve retornar 3 quando somar 1 + 2', () => {
        expect(soma(1, 2)).toBe(3);
    });

    it('deve retornar 5 quando somar 2 + 3', () => {
        expect(soma(2, 3)).toBe(5);
    });


})
