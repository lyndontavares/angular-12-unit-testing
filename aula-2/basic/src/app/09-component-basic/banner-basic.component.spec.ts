import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBasicComponent } from './banner-basic.component';

describe('BannerBasicComponent', () => {
  let component: BannerBasicComponent;
  let fixture: ComponentFixture<BannerBasicComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerBasicComponent ]
    })
    .compileComponents(); //<= compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBasicComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); //<= Você deve dizer ao TestBedpara executar a vinculação de dados (data binding) chamando fixture.detectChanges()
    expect(h1.textContent).toContain(component.title);
  });

});
