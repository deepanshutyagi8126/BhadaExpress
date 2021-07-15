import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDriverComponent } from './join-driver.component';

describe('JoinDriverComponent', () => {
  let component: JoinDriverComponent;
  let fixture: ComponentFixture<JoinDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
