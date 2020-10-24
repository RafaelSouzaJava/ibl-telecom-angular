import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosAddComponent } from './planos-add.component';

describe('PlanosAddComponent', () => {
  let component: PlanosAddComponent;
  let fixture: ComponentFixture<PlanosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
