import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailventaComponent } from './detailventa.component';

describe('DetailventaComponent', () => {
  let component: DetailventaComponent;
  let fixture: ComponentFixture<DetailventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailventaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
