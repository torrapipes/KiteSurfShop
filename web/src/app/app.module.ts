import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { BoardsService } from './services/boards.service';



// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './components/board/board.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BoardsComponent,
    BoardComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    BoardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
