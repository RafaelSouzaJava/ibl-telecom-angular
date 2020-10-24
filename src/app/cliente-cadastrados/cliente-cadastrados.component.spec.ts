import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastradosComponent } from './cliente-cadastrados.component';

describe('ClienteCadastradosComponent', () => {
  let component: ClienteCadastradosComponent;
  let fixture: ComponentFixture<ClienteCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
