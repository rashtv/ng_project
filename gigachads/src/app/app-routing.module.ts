import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/notFound/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlcoDetailComponent } from './pages/alco-detail/alco-detail.component'

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'catalogue/alco_detail/:id', component: AlcoDetailComponent },
  {path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
