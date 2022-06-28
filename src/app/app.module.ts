import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    NextDirective,
    PrevDirective,
    SectionComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
