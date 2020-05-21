import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgInfo1Component } from './bg-info1.component';

describe('BgInfo1Component', () => {
  let component: BgInfo1Component;
  let fixture: ComponentFixture<BgInfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgInfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
