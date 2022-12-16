import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ds2Component } from './ds2.component';

describe('Ds2Component', () => {
  let component: Ds2Component;
  let fixture: ComponentFixture<Ds2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ds2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ds2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
