import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReturnComponent } from './detailcompra.component';

describe('DetailsComponent', () => {
  let component: DetailsReturnComponent;
  let fixture: ComponentFixture<DetailsReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
