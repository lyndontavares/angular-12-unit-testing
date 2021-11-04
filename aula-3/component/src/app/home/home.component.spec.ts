import { Component, EventEmitter, Input, Output } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ShopItem, ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-shopping-list',
  template: ''
})
class MockShoppingListComponent {
  @Input() shoppingList: Array<ShopItem> = [];
  @Output() itemRemove = new EventEmitter<number>();
  @Output() clear = new EventEmitter<void>();
  @Output() print = new EventEmitter<void>();
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockShoppingListComponent,
        HomeComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // #region HTML related tests
  // Page layout
  it('should have a div element with class page-layout', () => {
    const el = fixture.debugElement.query(By.css('div.page-layout'));
    expect(el).toBeTruthy();
  });
  // Page title
  it('should have a h1 element inside with class page-title inside the page-layout element', () => {
    const el = fixture.debugElement.query(By.css('.page-layout > h1.page-title'));
    expect(el).toBeTruthy();
  });
  it('should display Shopping Cart on the page-title element', () => {
    const el = fixture.debugElement.query(By.css('.page-title'));
    expect(el.nativeElement.innerText).toEqual('Shopping Cart');
  });
  // Inner page wrapper
  it('should have a div element with class inner-page-wrapper below the page-title element', () => {
    const el = fixture.debugElement.query(By.css('.page-title + div.inner-page-wrapper'));
    expect(el).toBeTruthy();
  });
  it('should have a section element with class input-section inside the inner-page-wrapper element', () => {
    const el =  fixture.debugElement.query(By.css('.inner-page-wrapper section.input-section'));
    expect(el).toBeTruthy();
  });
  it('should have a section element with class list-section below the input-section element', () => {
    const el = fixture.debugElement.query(By.css('.input-section + section.list-section'));
    expect(el).toBeTruthy();
  });
  // Input section
  it('should have a h2 element with class ection__title inside the input-seciton element', () => {
    const el = fixture.debugElement.query(By.css('.input-section h2.section__title'));
    expect(el).toBeTruthy();
  });
  it('should display Add item to cart on the section__title element inside the input-section', () => {
    const el = fixture.debugElement.query(By.css('.input-section h2.section__title'));
    expect(el.nativeElement.innerText).toEqual('Add item to cart');
  });
  it('should have a div element with class section__body inside the input-section', () => {
    const el = fixture.debugElement.query(By.css('.input-section div.section__body'));
    expect(el).toBeTruthy();
  });
  it('should have two div elements with class field inside the input-section section__body', () => {
    const els = fixture.debugElement.queryAll(By.css('.input-section .section__body div.field'));
    expect(els.length).toEqual(2);
  });
  it('should have the --name class on the first field element inside input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .field:first-child'));
    expect(el.nativeElement.classList).toContain('--name');
  });
  it('should have the --qty class on the second field element inside input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .field:nth-child(2)'));
    expect(el.nativeElement.classList).toContain('--qty');
  });
  it('should have a label element with class field__title in the name field of input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--name label.field__title'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('name');
    expect(el.nativeElement.innerText).toEqual('Name');
  });
  it('should have an input element with class field__input for the name field of input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--name input.field__input'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
    expect(el.nativeElement.getAttribute('id')).toEqual('name');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');
  });
  it('should bind the name field with the newItemName variable', () => {
    // Arrange
    component.newItemName = null;
    fixture.detectChanges();

    // Act
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--name .field__input'));
    const inputEl = el.nativeElement as HTMLInputElement;
    inputEl.value = 'test';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.newItemName).toEqual('test');
  });
  it('should have a label element with class field__title in the qty field of input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--qty label.field__title'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('qty');
    expect(el.nativeElement.innerText).toEqual('Qty');
  });
  it('should have an input element with class field__input for the qty field of input-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--qty input.field__input'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
    expect(el.nativeElement.getAttribute('id')).toEqual('qty');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');
    expect(el.nativeElement.getAttribute('maxlength')).toEqual('3');
  });
  it('should bind the qty field with the newItemQty variable', () => {
    // Arrange
    component.newItemQty = null;
    fixture.detectChanges();

    // Act
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--qty .field__input'));
    const inputEl = el.nativeElement as HTMLInputElement;
    inputEl.value = '3';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.newItemQty).toEqual('3');
  });
  it('should have a button element with class btn and --add-to-cart inside the input-section', () => {
    const el = fixture.debugElement.query(By.css('.input-section .section__body button.btn.--add-to-cart'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('button');
    expect(el.nativeElement.getAttribute('role')).toEqual('button');
    expect(el.nativeElement.innerText).toEqual('Add to cart');
  });
  it('should call the addItem funciton when the add to cart button is clicked', () => {
    const fnc = spyOn(component, 'addItem');
    const el = fixture.debugElement.query(By.css('.input-section .section__body .--add-to-cart'));
    el.triggerEventHandler('click', null);
    expect(fnc).toHaveBeenCalled();

    el.nativeElement.dispatchEvent(new Event('click'));
    expect(fnc).toHaveBeenCalled();

    (el.nativeElement as HTMLButtonElement).click();
    expect(fnc).toHaveBeenCalled();
  });
  // List section
  it('should have a h2 element with class section__title inside the list-seciton', () => {
    const el = fixture.debugElement.query(By.css('.list-section h2.section__title'));
    expect(el).toBeTruthy();
  });
  it('should display Shopping List on the section__title element in list-section', () => {
    const el = fixture.debugElement.query(By.css('.list-section .section__title'));
    expect(el.nativeElement.innerText).toEqual('Shopping List');
  });
  it('should have a div element with class section__body insie the list-section', () => {
    const el = fixture.debugElement.query(By.css('.list-section div.section__body'));
    expect(el).toBeTruthy();
  });
  it('should have a shopping-list component inside the list-section section__body', () => {
    const el = fixture.debugElement.query(By.css('.list-section .section__body app-shopping-list'));
    expect(el).toBeTruthy();
  });
  it('should pass cart to the shoppingListComponent', () => {
    const el = fixture.debugElement.query(By.css('app-shopping-list'));
    const shoppingListCOmponent = el.componentInstance as ShoppingListComponent;
    const dummyCart =[
      {
        name: 'Onion',
        qty: '1 piece'
      }
    ];
    component.cart = dummyCart;
    fixture.detectChanges();
    expect(shoppingListCOmponent.shoppingList).toEqual(dummyCart);
  });
  it('should call the removeItem funciton when the shopping-list component emit itemRemove event', () => {
    const el = fixture.debugElement.query(By.css('app-shopping-list'));
    const shoppingListComponent = el.componentInstance as ShoppingListComponent;
    const fnc = spyOn(component, 'removeItem');
    shoppingListComponent.itemRemove.next();
    expect(fnc).toHaveBeenCalled();
  });
  it('should call the printList funciton when the shopping-list component emit print event', () => {
    const el = fixture.debugElement.query(By.css('app-shopping-list'));
    const shoppingListComponent = el.componentInstance as ShoppingListComponent;
    const fnc = spyOn(component, 'printList');
    shoppingListComponent.print.next();
    expect(fnc).toHaveBeenCalled();
  });
  it('should call the clearList funciton when the shopping-list component emit clear event', () => {
    const el = fixture.debugElement.query(By.css('app-shopping-list'));
    const shoppingListComponent = el.componentInstance as ShoppingListComponent;
    const fnc = spyOn(component, 'clearList');
    shoppingListComponent.clear.next();
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

  // #region addItem related tests
  it('should push newItemName and newItemQty as new item into cart when addItem is called', () => {
    // Arrange
    component.cart = [];
    component.newItemName = 'Apple';
    component.newItemQty = '2 pieces';
    fixture.detectChanges();

    // Act
    component.addItem();
    fixture.detectChanges();

    // Assert
    const expectedCart = [
      {
        name: 'Apple',
        qty: '2 pieces'
      }
    ];
    expect(component.cart).toEqual(expectedCart);
  });
  it('should clear newItemName and newItemQty when addItem is called', () => {
    // Arrange
    component.cart = [];
    component.newItemName = 'Apple';
    component.newItemQty = '2 pieces';
    fixture.detectChanges();

    // Act
    component.addItem();
    fixture.detectChanges();

    // Assert
    expect(component.newItemName).toEqual('');
    expect(component.newItemQty).toEqual('');
  });
  // #endregion

  // #region removeItem related tests
  it('should remove item at index from the cart when removeItem is called', () => {
    // Arrange
    component.cart = [
      {
        name: 'apple',
        qty: '1 piece'
      },
      {
        name: 'melon',
        qty: '1 pieces'
      }
    ];
    fixture.detectChanges();

    // Act
    component.removeItem(1);
    fixture.detectChanges();

    // Assert
    const expectedCart = [
      {
        name: 'apple',
        qty: '1 piece'
      }
    ];
    expect(component.cart).toEqual(expectedCart);
  });
  it('should not remove item from cart if removeItem is called but the index passed in is less than zero', () => {
    // Arrange
    component.cart = [
      {
        name: 'apple',
        qty: '1 piece'
      },
      {
        name: 'melon',
        qty: '1 pieces'
      }
    ];
    fixture.detectChanges();

    // Act
    component.removeItem(-1);
    fixture.detectChanges();

    // Assert
    const expectedCart = [
      {
        name: 'apple',
        qty: '1 piece'
      },
      {
        name: 'melon',
        qty: '1 pieces'
      }
    ];
    expect(component.cart).toEqual(expectedCart);
  });
  // #endregion

  // #region clearList related tests
  it('should empty the cart when clearList is called', () => {
    // Arrange
    component.cart = [
      {
        name: 'apple',
        qty: '1 piece'
      },
      {
        name: 'melon',
        qty: '1 pieces'
      }
    ];
    fixture.detectChanges();

    // Act
    component.clearList();
    fixture.detectChanges();

    // Assert
    expect(component.cart.length).toEqual(0);
  });
  // #endregion

  // #region printList related tests
  it('should call window.confirm when printList is called', () => {
    // Arrange
    const fnc = spyOn(window, 'confirm');

    // Act
    component.printList();

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

});
