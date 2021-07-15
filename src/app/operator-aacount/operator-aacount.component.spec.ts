import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAacountComponent } from './operator-aacount.component';

describe('OperatorAacountComponent', () => {
  let component: OperatorAacountComponent;
  let fixture: ComponentFixture<OperatorAacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAacountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorAacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
