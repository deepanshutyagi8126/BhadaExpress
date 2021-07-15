import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurService2Component } from './our-service2.component';

describe('OurService2Component', () => {
  let component: OurService2Component;
  let fixture: ComponentFixture<OurService2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurService2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
