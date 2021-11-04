import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent, Person } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should return sum of the two inputs', () => {
    // Arrange
    const a = 1;
    const b = 2;

    // Act
    const c = component.sum(a, b);

    // Assert
    expect(c).toEqual(a + b);
  });

  it('should throw error if any of the parameter is not a number', () => {
    // Arrange
    const a = 1;
    const b = null;

    // Act & Assert
    expect( () => { component.sum(a, b) } ).toThrow('Invalid parameters! Only numbers are allowed.');
  });

  it('should call canDrinkAlcohol function when serveDrink is called', () => {
    // Arrange
    const fnc = spyOn(component, 'canDrinkAlcohol');
    const testPerson: Person = {
      age: 18
    };

    // Act
    component.serveDrink(testPerson);

    // Assert
    expect(fnc).toHaveBeenCalled();
  });

  it('should pass age into the canDrinkAlcohol function when serveDrink is called', () => {
    // Arrange
    const testPerson: Person = {
      age: 14
    };
    const fnc = spyOn(component, 'canDrinkAlcohol');

    // Act
    component.serveDrink(testPerson);

    // Assert
    expect(fnc).toHaveBeenCalledWith(testPerson.age);
  });

  it('should only call canDrinkAlcohol once when serveDrink is called', () => {
    // Arrange
    const testPerson: Person = {
      age: 16
    };
    const fnc = spyOn(component, 'canDrinkAlcohol');

    // Act
    component.serveDrink(testPerson);

    // Assert
    expect(fnc).toHaveBeenCalledTimes(1);
  });

  it('should return Beer when serveDrink is called and if canDrinkAlcohol returns true', () => {
    // Arrange
    const testPerson: Person = {
      age: 16
    };
    spyOn(component, 'canDrinkAlcohol').and.returnValue(true);

    // Act
    const result = component.serveDrink(testPerson);

    // Assert
    expect(result).toEqual('Beer');
  });

  it('should return Juice when serveDrink is called and if canDrinkAlcohol returns false', () => {
    // Arrange
    const testPerson: Person = {
      age: 17
    };
    spyOn(component, 'canDrinkAlcohol').and.callFake(age => {
      return age > 18;
    });

    // Act
    const result = component.serveDrink(testPerson);

    // Assert
    expect(result).toEqual('Juice');
  });

  it('should return the favorite drink of the person is exist when serveDrink is called', () => {
    // Arrange
    const favoriteDrink = 'Apple Juice';
    const testPerson: Person = {
      age: 17,
      favoriteDrink
    };

    // Act
    const result = component.serveDrink(testPerson);

    // Assert
    expect(result).toEqual(favoriteDrink);
  });

  it('should return true when canDrinkAlcohol is called and the person is older than 18 years old', () => {
    // Arrange
    const testPerson: Person = {
      age: 19
    };

    // Act
    const result = component.canDrinkAlcohol(testPerson.age);

    // Assert
    expect(result).toBeTruthy();
  });

  it('should return true when canDrinkAlcohol is called and the person is 18 years old', () => {
    // Arrange
    const testPerson: Person = {
      age: 18
    };

    // Act
    const result = component.canDrinkAlcohol(testPerson.age);

    // Assert
    expect(result).toBeTruthy();
  });

  it('should return true when canDrinkAlcohol is called and the person is less than 18 years old', () => {
    // Arrange
    const testPerson: Person = {
      age: 17
    };

    // Act
    const result = component.canDrinkAlcohol(testPerson.age);

    // Assert
    expect(result).toBeFalsy();
  });
});
