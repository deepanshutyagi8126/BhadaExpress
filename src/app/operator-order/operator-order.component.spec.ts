import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorOrderComponent } from './operator-order.component';

describe('OperatorOrderComponent', () => {
  let component: OperatorOrderComponent;
  let fixture: ComponentFixture<OperatorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
