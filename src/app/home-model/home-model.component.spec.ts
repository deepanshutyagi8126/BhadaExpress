import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModelComponent } from './home-model.component';

describe('HomeModelComponent', () => {
  let component: HomeModelComponent;
  let fixture: ComponentFixture<HomeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
