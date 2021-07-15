import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDriverComponent } from './operator-driver.component';

describe('OperatorDriverComponent', () => {
  let component: OperatorDriverComponent;
  let fixture: ComponentFixture<OperatorDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
