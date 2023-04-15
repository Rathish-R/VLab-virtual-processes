import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchKineticsComponent } from './batch-kinetics.component';

describe('BatchKineticsComponent', () => {
  let component: BatchKineticsComponent;
  let fixture: ComponentFixture<BatchKineticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchKineticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchKineticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
