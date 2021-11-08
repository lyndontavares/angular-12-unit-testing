import { calculateDaysBetweenDates } from "./funcoes.helper";

describe('02-usando funçoes', () => {

    it('deve testar função soma', () => {
        const soma = (a: number, b: number): number => a + b;
        expect(soma(1, 2)).toBe(3);
    });

    it('deve testar função calculateDaysBetweenDates', () => {
        const dias = calculateDaysBetweenDates(new Date(2020, 1, 1), new Date(2020, 1, 2));
        expect(dias).toBe(1);
    });


})
