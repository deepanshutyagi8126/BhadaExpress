import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorStickersComponent } from './operator-stickers.component';

describe('OperatorStickersComponent', () => {
  let component: OperatorStickersComponent;
  let fixture: ComponentFixture<OperatorStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorStickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
