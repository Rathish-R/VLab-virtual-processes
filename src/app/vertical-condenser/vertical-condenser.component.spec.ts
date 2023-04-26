import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCondenserComponent } from './vertical-condenser.component';

describe('VerticalCondenserComponent', () => {
  let component: VerticalCondenserComponent;
  let fixture: ComponentFixture<VerticalCondenserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCondenserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalCondenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
