import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesestimarincomeComponent } from './desestimarincome.component';

describe('DesestimarincomeComponent', () => {
  let component: DesestimarincomeComponent;
  let fixture: ComponentFixture<DesestimarincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesestimarincomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesestimarincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
