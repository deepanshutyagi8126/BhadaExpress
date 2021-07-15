import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationHistoryComponent } from './transcation-history.component';

describe('TranscationHistoryComponent', () => {
  let component: TranscationHistoryComponent;
  let fixture: ComponentFixture<TranscationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
