import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AllbookComponent } from './allbook/allbook.component';
import { CreatebookComponent } from './user/createbook/createbook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { HomePageComponent } from './home/home.page.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovalBookComponent } from './approval-book/approval-book.component';
import { SliderPictureComponent } from './slider-picture/slider-picture.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { BookAuthorPictureComponent } from './book-author-picture/book-author-picture.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomePageComponent },
  {path: 'book-detail', component: DetailbookComponent },
  {path: 'add-book', component: CreatebookComponent, canActivate: [AuthGuard]},
  {path: 'all-book', component: AllbookComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'approval-book', component: ApprovalBookComponent },
  {path: 'slider-picture', component: SliderPictureComponent },
  {path: 'book-author', component: BookAuthorPictureComponent },
  {path: 'add-author', component: CreateAuthorComponent },



];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
