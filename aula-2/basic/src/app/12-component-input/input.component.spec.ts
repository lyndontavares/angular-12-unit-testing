import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('component-input', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar corretamente o valor @input passado', () => {
    //nenhum valor inicial
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('');
    //atribuido valor a message e verificado se foi renderizado
    component.message = "Olá"
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Olá');
  });


});
