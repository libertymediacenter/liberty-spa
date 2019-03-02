import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGridViewComponent } from './music-grid-view.component';

describe('MusicGridViewComponent', () => {
  let component: MusicGridViewComponent;
  let fixture: ComponentFixture<MusicGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
