import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedComponent } from './bordered.component';

describe('BorderedComponent', () => {
  let component: BorderedComponent;
  let fixture: ComponentFixture<BorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
