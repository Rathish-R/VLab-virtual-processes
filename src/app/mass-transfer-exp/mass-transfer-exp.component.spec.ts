import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassTransferExpComponent } from './mass-transfer-exp.component';

describe('MassTransferExpComponent', () => {
  let component: MassTransferExpComponent;
  let fixture: ComponentFixture<MassTransferExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassTransferExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassTransferExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
