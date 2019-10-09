import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {AddUser}  from "./User/AddUser";
import {HomePage}  from "./Home/HomePage";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import {RouterModule,Routes}  from "@angular/router";


const routeMap :Routes=[
  {path:"Home", component :HomePage},
  {path:"addUser", component :AddUser},
  {path:"**", component :HomePage}
]

@NgModule({
  imports:      [HttpModule, BrowserModule, RouterModule.forRoot(routeMap),FormsModule],
  declarations: [ AppComponent,HomePage,AddUser ],
  bootstrap:    [ AppComponent ]
})
export class MainModule { }


/**
 * template
 */ 
