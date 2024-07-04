import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentaryFoodListComponent } from './alimentary-food-list.component';

describe('AlimentaryFoodListComponent', () => {
  let component: AlimentaryFoodListComponent;
  let fixture: ComponentFixture<AlimentaryFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentaryFoodListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentaryFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
