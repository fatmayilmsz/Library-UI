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

// import { MatDividerModule } from '@angular/material/divider';
// import { MatCardModule } from '@angular/material/card';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CardsliderComponent,
    NextDirective,
    PrevDirective,
    SliderComponent
  ],
  imports: [
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
    // MatDividerModule,
    // MatCardModule,
    // MatCarouselModule.forRoot(),
    // FlexLayoutModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
