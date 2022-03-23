import { PersonagensDetalhesComponent } from './components/personagens-detalhes/personagens-detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonagensTodosComponent} from './components/personagens-todos/personagens-todos.component';

const routes: Routes = [
  {path: 'character', component:PersonagensTodosComponent},
  {path: '', redirectTo: '/character', pathMatch: 'full'},
  {path: 'character/:id', component: PersonagensDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
