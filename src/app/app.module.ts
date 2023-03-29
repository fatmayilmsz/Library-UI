import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MaterialExampleModule} from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home/home.page.component';
import { RouterModule } from '@angular/router';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { SliderComponent } from './slider/slider.component';
import { BookauthorComponent } from './authorofthemonth/bookauthor.component';
import { CategoryComponent } from './category/category.component';
import { CreatebookComponent } from './user/createbook/createbook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { BookofthemonthComponent } from './bookofthemonth/bookofthemonth.component';
import { AllbookComponent } from './allbook/allbook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovalBookComponent } from './approval-book/approval-book.component';
import { SliderPictureComponent } from './slider-picture/slider-picture.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { BookAuthorPictureComponent } from './book-author-picture/book-author-picture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { NotFoundComponent } from './not.found/not.found.component';
import { AccountComponent } from './account/account.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CardsliderComponent,
    NextDirective,
    PrevDirective,
    SliderComponent,
    BookauthorComponent,
    CategoryComponent,
    CreatebookComponent,
    DetailbookComponent,
    BookofthemonthComponent,
    AllbookComponent,
    NavbarComponent,
    AdminComponent,
    ApprovalBookComponent,
    SliderPictureComponent,
    FeaturedBooksComponent,
    BookAuthorPictureComponent,
    CreateAuthorComponent,
    NotFoundComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
