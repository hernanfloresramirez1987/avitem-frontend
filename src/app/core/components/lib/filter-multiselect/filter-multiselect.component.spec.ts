import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMultiselectComponent } from './filter-multiselect.component';

describe('FilterMultiselectComponent', () => {
  let component: FilterMultiselectComponent;
  let fixture: ComponentFixture<FilterMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMultiselectComponent]
    });
    fixture = TestBed.createComponent(FilterMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
