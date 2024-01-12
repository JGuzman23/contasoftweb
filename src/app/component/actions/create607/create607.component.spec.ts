import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create607Component } from './create607.component';

describe('Create607Component', () => {
  let component: Create607Component;
  let fixture: ComponentFixture<Create607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Create607Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Create607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
