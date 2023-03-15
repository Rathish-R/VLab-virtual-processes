import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryDryerComponent } from './rotary-dryer.component';

describe('RotaryDryerComponent', () => {
  let component: RotaryDryerComponent;
  let fixture: ComponentFixture<RotaryDryerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaryDryerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryDryerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
