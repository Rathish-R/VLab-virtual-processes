import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidMechanicsComponent } from './fluid-mechanics.component';

describe('FluidMechanicsComponent', () => {
  let component: FluidMechanicsComponent;
  let fixture: ComponentFixture<FluidMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidMechanicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluidMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
