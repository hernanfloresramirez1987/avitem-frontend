import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCreateComponent } from './purchase-create.component';

describe('PurchaseCreateComponent', () => {
  let component: PurchaseCreateComponent;
  let fixture: ComponentFixture<PurchaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
