import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPartnerComponent } from './join-partner.component';

describe('JoinPartnerComponent', () => {
  let component: JoinPartnerComponent;
  let fixture: ComponentFixture<JoinPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
