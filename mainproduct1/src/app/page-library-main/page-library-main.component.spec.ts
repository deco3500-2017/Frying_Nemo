import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLibraryMainComponent } from './page-library-main.component';

describe('PageLibraryMainComponent', () => {
  let component: PageLibraryMainComponent;
  let fixture: ComponentFixture<PageLibraryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLibraryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
