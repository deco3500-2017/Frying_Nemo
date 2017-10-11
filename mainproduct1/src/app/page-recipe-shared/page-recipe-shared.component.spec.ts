import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeSharedComponent } from './page-recipe-shared.component';

describe('PageRecipeSharedComponent', () => {
  let component: PageRecipeSharedComponent;
  let fixture: ComponentFixture<PageRecipeSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecipeSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
