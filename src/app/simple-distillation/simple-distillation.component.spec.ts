import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDistillationComponent } from './simple-distillation.component';

describe('SimpleDistillationComponent', () => {
  let component: SimpleDistillationComponent;
  let fixture: ComponentFixture<SimpleDistillationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDistillationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDistillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
