import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPizzaComponent } from './lista-pizza.component';

describe('ListaPizzaComponent', () => {
  let component: ListaPizzaComponent;
  let fixture: ComponentFixture<ListaPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
