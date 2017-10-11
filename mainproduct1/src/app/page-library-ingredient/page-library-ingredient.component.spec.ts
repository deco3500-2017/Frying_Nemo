import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLibraryIngredientComponent } from './page-library-ingredient.component';

describe('PageLibraryIngredientComponent', () => {
  let component: PageLibraryIngredientComponent;
  let fixture: ComponentFixture<PageLibraryIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLibraryIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
