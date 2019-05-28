import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../services/boards.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  
  board:any = {};
  
  
  constructor( private activatedRoute: ActivatedRoute,  
                private _boardsService: BoardsService

    ) { 

    this.activatedRoute.params.subscribe( params => {
      this.board = this._boardsService.getBoard( params['id'] );
    } );

  }


}
