import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelicalCoilHExComponent } from './helical-coil-hex.component';

describe('HelicalCoilHExComponent', () => {
  let component: HelicalCoilHExComponent;
  let fixture: ComponentFixture<HelicalCoilHExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelicalCoilHExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelicalCoilHExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
