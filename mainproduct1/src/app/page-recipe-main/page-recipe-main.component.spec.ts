import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeMainComponent } from './page-recipe-main.component';

describe('PageRecipeMainComponent', () => {
  let component: PageRecipeMainComponent;
  let fixture: ComponentFixture<PageRecipeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecipeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
