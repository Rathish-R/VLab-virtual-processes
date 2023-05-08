import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloneSeparatorComponent } from './cyclone-separator.component';

describe('CycloneSeparatorComponent', () => {
  let component: CycloneSeparatorComponent;
  let fixture: ComponentFixture<CycloneSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycloneSeparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycloneSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
