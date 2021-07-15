import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAssociateComponent } from './join-associate.component';

describe('JoinAssociateComponent', () => {
  let component: JoinAssociateComponent;
  let fixture: ComponentFixture<JoinAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
