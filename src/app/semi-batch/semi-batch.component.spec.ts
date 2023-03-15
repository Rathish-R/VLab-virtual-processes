import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiBatchComponent } from './semi-batch.component';

describe('SemiBatchComponent', () => {
  let component: SemiBatchComponent;
  let fixture: ComponentFixture<SemiBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
