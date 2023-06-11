import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightPipesComponent } from './straight-pipes.component';

describe('StraightPipesComponent', () => {
  let component: StraightPipesComponent;
  let fixture: ComponentFixture<StraightPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StraightPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StraightPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
