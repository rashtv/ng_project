import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodocreateComponent } from './todocreate/todocreate.component';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from './components/atom/btn/btn.component';
import { InputComponent } from './components/atom/input/input.component';
import { SearchComponent } from './components/molecule/search/search.component';
import { HeaderComponent } from './components/organism/header/header.component';
import { FooterComponent } from './components/organism/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoitemComponent,
    TodocreateComponent,
    BtnComponent,
    InputComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
