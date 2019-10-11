import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeCarsComponent } from './top-three-cars.component';

describe('TopThreeCarsComponent', () => {
  let component: TopThreeCarsComponent;
  let fixture: ComponentFixture<TopThreeCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopThreeCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThreeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
