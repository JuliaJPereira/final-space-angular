import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensDetalhesComponent } from './personagens-detalhes.component';

describe('PersonagensDetalhesComponent', () => {
  let component: PersonagensDetalhesComponent;
  let fixture: ComponentFixture<PersonagensDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
