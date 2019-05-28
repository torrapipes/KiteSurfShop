import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './components/board/board.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'boards', component: BoardsComponent },
    { path: 'board/:id', component: BoardComponent },
    { path: '**', redirectTo: 'home' },
];


export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});


