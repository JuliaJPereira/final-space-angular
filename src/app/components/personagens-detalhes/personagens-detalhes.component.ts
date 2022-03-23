import { FinalSpaceService } from './../../service/final-space.service';
import { Personagens } from './../../models/personagens-todos.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personagens-detalhes',
  templateUrl: './personagens-detalhes.component.html',
  styleUrls: ['./personagens-detalhes.component.scss']
})
export class PersonagensDetalhesComponent implements OnInit {

  personagemObj: Personagens = new Personagens({});

  constructor(private route: ActivatedRoute,
    private finalSpaceService: FinalSpaceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.finalSpaceService
          .getPersonagemByNameOrId(id)
          .subscribe((personagem) =>{
            console.log(personagem);
            this.personagemObj = personagem;
          })
    }
  }

}
