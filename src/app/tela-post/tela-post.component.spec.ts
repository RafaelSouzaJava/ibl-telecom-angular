import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPostComponent } from './tela-post.component';

describe('TelaPostComponent', () => {
  let component: TelaPostComponent;
  let fixture: ComponentFixture<TelaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
