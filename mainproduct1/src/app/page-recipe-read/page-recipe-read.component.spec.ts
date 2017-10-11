import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeReadComponent } from './page-recipe-read.component';

describe('PageRecipeReadComponent', () => {
  let component: PageRecipeReadComponent;
  let fixture: ComponentFixture<PageRecipeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecipeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
