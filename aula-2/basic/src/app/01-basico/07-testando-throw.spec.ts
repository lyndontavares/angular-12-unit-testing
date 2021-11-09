import { soma } from "./funcoes.helper";

describe('testando throw', () => {

    it('should throw error if any of the parameter is not a number', () => {
      // Arrange
      const a = 1;
      const b = null;

      // Act & Assert
      expect( () => { soma(a, b) } ).toThrow('Invalid parameters! Only numbers are allowed.');
    });

})
