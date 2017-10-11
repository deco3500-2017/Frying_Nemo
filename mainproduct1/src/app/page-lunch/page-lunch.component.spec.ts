import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLunchComponent } from './page-lunch.component';

describe('PageLunchComponent', () => {
  let component: PageLunchComponent;
  let fixture: ComponentFixture<PageLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
