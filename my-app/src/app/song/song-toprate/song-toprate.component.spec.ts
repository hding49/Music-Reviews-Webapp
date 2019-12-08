import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongToprateComponent } from './song-toprate.component';

describe('SongToprateComponent', () => {
  let component: SongToprateComponent;
  let fixture: ComponentFixture<SongToprateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongToprateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongToprateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
