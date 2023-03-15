import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering.component';

describe('ChemicalRectionEngineeringComponent', () => {
  let component: ChemicalRectionEngineeringComponent;
  let fixture: ComponentFixture<ChemicalRectionEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalRectionEngineeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalRectionEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
