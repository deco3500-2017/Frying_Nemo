import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeCreateComponent } from './page-recipe-create.component';

describe('PageRecipeCreateComponent', () => {
  let component: PageRecipeCreateComponent;
  let fixture: ComponentFixture<PageRecipeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecipeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
