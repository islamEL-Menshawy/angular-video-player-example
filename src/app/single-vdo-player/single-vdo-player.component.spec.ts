import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVdoPlayerComponent } from './single-vdo-player.component';

describe('SingleVdoPlayerComponent', () => {
  let component: SingleVdoPlayerComponent;
  let fixture: ComponentFixture<SingleVdoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVdoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVdoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
