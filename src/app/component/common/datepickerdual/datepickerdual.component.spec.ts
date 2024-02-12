import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerdualComponent } from './datepickerdual.component';

describe('DatepickerdualComponent', () => {
  let component: DatepickerdualComponent;
  let fixture: ComponentFixture<DatepickerdualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerdualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerdualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
