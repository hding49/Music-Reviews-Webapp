import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistReadComponent } from './playlist-read.component';

describe('PlaylistReadComponent', () => {
  let component: PlaylistReadComponent;
  let fixture: ComponentFixture<PlaylistReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
