import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingOrderComponent } from './upcoming-order.component';

describe('UpcomingOrderComponent', () => {
  let component: UpcomingOrderComponent;
  let fixture: ComponentFixture<UpcomingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
