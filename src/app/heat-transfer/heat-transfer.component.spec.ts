import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatTransferComponent } from './heat-transfer.component';

describe('HeatTransferComponent', () => {
  let component: HeatTransferComponent;
  let fixture: ComponentFixture<HeatTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
