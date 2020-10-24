import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosAdminComponent } from './planos-admin.component';

describe('PlanosAdminComponent', () => {
  let component: PlanosAdminComponent;
  let fixture: ComponentFixture<PlanosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
