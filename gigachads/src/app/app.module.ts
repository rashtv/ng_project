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
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { SearchBtnComponent } from './components/atom/search-btn/search-btn.component';
import { AlcoCardComponent } from './components/molecule/alco-card/alco-card.component';
import { PageNotFoundComponent } from './pages/notFound/page-not-found/page-not-found.component';

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
    MainComponent,
    AboutComponent,
    CatalogueComponent,
    SearchBtnComponent,
    AlcoCardComponent,
    PageNotFoundComponent,
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
