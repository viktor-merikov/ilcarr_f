import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderFooterComponent } from './nav-header-footer.component';

describe('NavHeaderFooterComponent', () => {
  let component: NavHeaderFooterComponent;
  let fixture: ComponentFixture<NavHeaderFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
