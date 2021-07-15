import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesliderComponent } from './vehicleslider.component';

describe('VehiclesliderComponent', () => {
  let component: VehiclesliderComponent;
  let fixture: ComponentFixture<VehiclesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
