import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../services/boards.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  boards: any[] = [];
  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _boardsService: BoardsService,
               private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{

      this.term = params['term'];
      this.boards = this._boardsService.searchBoards( params['term'] );
      console.log(this.boards);

    });

  }

  seeBoard( idx: number ) {
    this.router.navigate( ['/board', idx] );
  }

}
