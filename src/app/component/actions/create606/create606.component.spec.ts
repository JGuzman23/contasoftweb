import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create606Component } from './create606.component';

describe('Create606Component', () => {
  let component: Create606Component;
  let fixture: ComponentFixture<Create606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Create606Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Create606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
