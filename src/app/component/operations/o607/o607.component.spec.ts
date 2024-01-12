import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O607Component } from './o607.component';

describe('O607Component', () => {
  let component: O607Component;
  let fixture: ComponentFixture<O607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [O607Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(O607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
