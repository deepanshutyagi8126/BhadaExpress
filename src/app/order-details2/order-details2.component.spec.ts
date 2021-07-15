import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetails2Component } from './order-details2.component';

describe('OrderDetails2Component', () => {
  let component: OrderDetails2Component;
  let fixture: ComponentFixture<OrderDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
