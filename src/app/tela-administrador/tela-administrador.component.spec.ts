import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAdministradorComponent } from './tela-administrador.component';

describe('TelaAdministradorComponent', () => {
  let component: TelaAdministradorComponent;
  let fixture: ComponentFixture<TelaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
