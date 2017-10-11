import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLibraryTypeComponent } from './page-library-type.component';

describe('PageLibraryTypeComponent', () => {
  let component: PageLibraryTypeComponent;
  let fixture: ComponentFixture<PageLibraryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLibraryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
