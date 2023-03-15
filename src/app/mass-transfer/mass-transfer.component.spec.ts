import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassTransferComponent } from './mass-transfer.component';

describe('MassTransferComponent', () => {
  let component: MassTransferComponent;
  let fixture: ComponentFixture<MassTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
