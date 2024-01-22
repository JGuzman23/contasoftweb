import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinvoiceIncomeComponent } from './createinvoice-income.component';

describe('CreateinvoiceIncomeComponent', () => {
  let component: CreateinvoiceIncomeComponent;
  let fixture: ComponentFixture<CreateinvoiceIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateinvoiceIncomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateinvoiceIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
