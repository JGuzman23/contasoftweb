import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconciliacionComponent } from './createconciliacion.component';

describe('CreateconciliacionComponent', () => {
  let component: CreateconciliacionComponent;
  let fixture: ComponentFixture<CreateconciliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateconciliacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateconciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
