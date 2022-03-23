import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensTodosComponent } from './personagens-todos.component';

describe('PersonagensTodosComponent', () => {
  let component: PersonagensTodosComponent;
  let fixture: ComponentFixture<PersonagensTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
