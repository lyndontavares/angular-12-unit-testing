import { analyzeAndValidateNgModules } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';

import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListComponent ],
      imports: [
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Utility function to push dummy item into the shoppingList
  function addItem(name: string, qty: string): void {
    component.shoppingList.push({ name, qty });
  }

  // #region HTML related tests
  it('should display two lines of hint if there are no items in the shoppingList', () => {
    // Arrange & Act
    component.shoppingList = [];
    fixture.detectChanges();

    // Assert
    const hint1El = fixture.debugElement.query(By.css('span.hint.--line1'));
    expect(hint1El).toBeTruthy();
    expect(hint1El.nativeElement.innerText).toEqual('Empty shopping list!');

    const hint2El = fixture.debugElement.query(By.css('span.hint.--line2'));
    expect(hint2El).toBeTruthy();
    expect(hint2El.nativeElement.innerHTML).toContain('Start adding new items');

    const arrowEl = hint2El.query(By.css('fa-icon.arrow'));
    expect(arrowEl).toBeTruthy();
    expect((arrowEl.componentInstance as FaIconComponent).icon).toEqual(component.faArrowLeft);

    const shoppingListEl = fixture.debugElement.query(By.css('.shopping__list'));
    expect(shoppingListEl).toBeFalsy();
  });
  // Shopping list
  it('should have an ul element with class shopping_list when shoppingList is not empty', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();

    // Assert
    const el = fixture.debugElement.query(By.css('ul.shopping__list'));
    expect(el).toBeTruthy();

    const hintEls = fixture.debugElement.queryAll(By.css('.hint'));
    expect(hintEls.length).toEqual(0);
  });
  it('should render correct number of item according to number of elements in the shoppingList', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();

    // Act
    const listLength = Math.floor(Math.random() * 10);
    for (let i = 0; i < listLength; i++) {
      const randomName = `item-${Math.floor(Math.random() * 10)}`;
      const randomQty = `${Math.floor(Math.random() * 10)} pieces`;
      addItem(randomName, randomQty);
    }
    fixture.detectChanges();

    // Assert
    const itemEls = fixture.debugElement.queryAll(By.css('li.item'));
    expect(itemEls.length).toEqual(listLength);
    itemEls.forEach((itemEl, index) => {
      const nameEl = itemEl.query(By.css('span.item__name'));
      const qtyEl = itemEl.query(By.css('span.item__qty'));
      const btnEl = itemEl.query(By.css('button.item__remove-btn'));
      const iconEl = btnEl.query(By.css('fa-icon'));
      expect(nameEl).toBeTruthy();
      expect(nameEl.nativeElement.innerText).toEqual(component.shoppingList[index].name);

      expect(qtyEl).toBeTruthy();
      expect(qtyEl.nativeElement.innerText).toEqual(`x ${component.shoppingList[index].qty}`);

      expect(btnEl).toBeTruthy();
      expect(btnEl.nativeElement.getAttribute('type')).toEqual('button');
      expect(btnEl.nativeElement.getAttribute('role')).toEqual('button');
      expect(iconEl).toBeTruthy();
      expect((iconEl.componentInstance as FaIconComponent).icon).toEqual(component.faTime);
    });
  });
  it('should call the removeItem function when the remove button is clicked', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();
    const fnc = spyOn(component, 'removeItem').and.callThrough();
    const itemIndex = 0;

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();
    const btnEl = fixture.debugElement.query(By.css('.item .item__remove-btn'));
    btnEl.triggerEventHandler('click', itemIndex);

    // Assert
    expect(fnc).toHaveBeenCalledWith(itemIndex);
  });
  // Action row
  it('should have a div element with class action-row when the shoppingList is not empty', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();

    // Assert
    const el = fixture.debugElement.query(By.css('div.action-row'));
    expect(el).toBeTruthy();
  });
  it('should have a print list button in the action row when shoppingList is not empty', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();

    // Assert
    const el = fixture.debugElement.query(By.css('.action-row button.--print-list'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.innerText).toEqual('Print List');
    expect(el.nativeElement.getAttribute('role')).toEqual('button');
    expect(el.nativeElement.getAttribute('type')).toEqual('button');
  });
  it('should call the printList function when the --print-list button is clicked', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();
    const fnc = spyOn(component, 'printList');

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.action-row button.--print-list'));
    el.triggerEventHandler('click', null);

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  it('should have a clear list button in the action row when shoppingList is not empty', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();

    // Assert
    const el = fixture.debugElement.query(By.css('.action-row button.--clear-list'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.innerText).toEqual('Clear');
    expect(el.nativeElement.getAttribute('role')).toEqual('button');
    expect(el.nativeElement.getAttribute('type')).toEqual('button');
  });
  it('should call the clearList function when the --print-list button is clicked', () => {
    // Arrange
    component.shoppingList = [];
    fixture.detectChanges();
    const fnc = spyOn(component, 'clearList');

    // Act
    addItem('Apple', '1 piece');
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.action-row button.--clear-list'));
    el.triggerEventHandler('click', null);

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

  // #region removeItem related tests
  it('should emit the itemRemove event with index when removeItem is called', () => {
    // Arrange
    const fnc = spyOn(component.itemRemove, 'next').and.callThrough();
    const indexToBeRemoved = 0;

    // Act
    component.removeItem(indexToBeRemoved);

    // Assert
    expect(fnc).toHaveBeenCalledWith(indexToBeRemoved);
  });
  // #endregion

  // #region clearList related tests
  it('should emit the clear event when clearList is called', () => {
    // Arrange
    const fnc = spyOn(component.clear, 'next').and.callThrough();

    // Act
    component.clearList();

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

  // #region printList related tests
  it('should emit the clear event when printList is called', () => {
    // Arrange
    const fnc = spyOn(component.print, 'next').and.callThrough();

    // Act
    component.printList();

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

});
