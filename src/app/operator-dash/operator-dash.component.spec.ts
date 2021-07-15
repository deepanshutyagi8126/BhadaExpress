import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashComponent } from './operator-dash.component';

describe('OperatorDashComponent', () => {
  let component: OperatorDashComponent;
  let fixture: ComponentFixture<OperatorDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
