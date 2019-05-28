import { Component, OnInit } from '@angular/core';
import { BoardsService, Board } from '../../services/boards.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: []
})
export class BoardsComponent implements OnInit {

boards:Board[] = [];

  // S'executa abans què tot
  constructor( private _boardsService:BoardsService,
              private router:Router 
    
    ) {
  }

   // Quan s'inicia s'executa això
  ngOnInit() {
    this.boards = this._boardsService.getBoards();
  }

  seeBoard ( idx:number ){
      this.router.navigate( ['/board', idx] );
  }

}
