import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPanEvaporatorComponent } from './open-pan-evaporator.component';

describe('OpenPanEvaporatorComponent', () => {
  let component: OpenPanEvaporatorComponent;
  let fixture: ComponentFixture<OpenPanEvaporatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPanEvaporatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPanEvaporatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
