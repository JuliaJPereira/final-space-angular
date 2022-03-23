import { Personagens } from './../../models/personagens-todos.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalSpaceService } from '../../service/final-space.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personagens-todos',
  templateUrl: './personagens-todos.component.html',
  styleUrls: ['./personagens-todos.component.scss']
})
export class PersonagensTodosComponent implements OnInit {

listPersonagem$ = new Observable<Personagens[]>();

  constructor(private route: ActivatedRoute,
    private finalSpaceService: FinalSpaceService) { }

  ngOnInit(): void {
    this.listPersonagem$ = this.finalSpaceService
                              .getListPersonagens();
  }

}
