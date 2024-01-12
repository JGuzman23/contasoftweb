import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O606Component } from './o606.component';

describe('O606Component', () => {
  let component: O606Component;
  let fixture: ComponentFixture<O606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [O606Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(O606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
