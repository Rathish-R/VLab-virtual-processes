import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalOperationsComponent } from './mechanical-operations.component';

describe('MechanicalOperationsComponent', () => {
  let component: MechanicalOperationsComponent;
  let fixture: ComponentFixture<MechanicalOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicalOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
