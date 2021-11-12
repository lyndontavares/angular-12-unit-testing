import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

/*

  TestBed
  Várias tarefas são necessárias para renderizar um componente em Angular,
  até mesmo o simples contador de componente. Se você olhar o main.ts e o
  AppModule de um aplicativo Angular típico, verá que uma “plataforma” é
  criada, um Módulo é declarado e este Módulo é inicializado.

  O compilador Angular traduz os modelos em código JavaScript.
  Para preparar a renderização, uma instância do Componente é
  criada, as dependências são resolvidas e injetadas, as entradas
  são definidas.

  Finalmente, o modelo é renderizado no DOM. Para testar, você poderia
  fazer tudo isso manualmente, mas precisaria mergulhar profundamente
  nas partes internas do Angular.

  Em vez disso, a equipe Angular fornece o TestBedpara facilitar os testes
  de unidade. O TestBedcria e configura um ambiente Angular para que você
  possa testar partes específicas do aplicativo, como Componentes e Serviços,
  com segurança e facilidade.

*/

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
