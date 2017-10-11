import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipePrivateComponent } from './page-recipe-private.component';

describe('PageRecipePrivateComponent', () => {
  let component: PageRecipePrivateComponent;
  let fixture: ComponentFixture<PageRecipePrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecipePrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
