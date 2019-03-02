import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViewLinkSectionComponent } from './info-view-link-section.component';

describe('InfoViewLinkSectionComponent', () => {
  let component: InfoViewLinkSectionComponent;
  let fixture: ComponentFixture<InfoViewLinkSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoViewLinkSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoViewLinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
