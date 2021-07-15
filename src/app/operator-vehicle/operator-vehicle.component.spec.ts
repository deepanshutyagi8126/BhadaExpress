import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorVehicleComponent } from './operator-vehicle.component';

describe('OperatorVehicleComponent', () => {
  let component: OperatorVehicleComponent;
  let fixture: ComponentFixture<OperatorVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
