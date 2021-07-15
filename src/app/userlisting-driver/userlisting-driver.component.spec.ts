import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistingDriverComponent } from './userlisting-driver.component';

describe('UserlistingDriverComponent', () => {
  let component: UserlistingDriverComponent;
  let fixture: ComponentFixture<UserlistingDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistingDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistingDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
