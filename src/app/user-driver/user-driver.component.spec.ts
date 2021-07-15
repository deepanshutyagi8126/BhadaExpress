import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDriverComponent } from './user-driver.component';

describe('UserDriverComponent', () => {
  let component: UserDriverComponent;
  let fixture: ComponentFixture<UserDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
