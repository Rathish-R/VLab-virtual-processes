import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellAndTubeComponent } from './shell-and-tube.component';

describe('ShellAndTubeComponent', () => {
  let component: ShellAndTubeComponent;
  let fixture: ComponentFixture<ShellAndTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellAndTubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellAndTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
