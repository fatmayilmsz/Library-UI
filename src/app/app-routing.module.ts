import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AllbookComponent } from './allbook/allbook.component';
import { CreatebookComponent } from './user/createbook/createbook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { HomePageComponent } from './home/home.page.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomePageComponent },
  {path: 'book-detail', component: DetailbookComponent },
  {path: 'add-book', component: CreatebookComponent },
  {path: 'all-book', component: AllbookComponent },
  {path: 'admin', component: AdminComponent },


];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
