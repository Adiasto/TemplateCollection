import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStory1Component } from './our-story1.component';

describe('OurStory1Component', () => {
  let component: OurStory1Component;
  let fixture: ComponentFixture<OurStory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
