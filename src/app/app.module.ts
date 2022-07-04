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
import { CardComponent } from './card/card.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { ServicesComponent } from './services/services.component';
import { SCardComponent } from './s-card/s-card.component';
import { NewsComponent } from './news/news.component';
import { Newscard1Component } from './newscard1/newscard1.component';
import { Newscard2Component } from './newscard2/newscard2.component';
import { ContactComponent } from './contact/contact.component';
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
    CardComponent,
    TeamCardComponent,
    ServicesComponent,
    SCardComponent,
    NewsComponent,
    Newscard1Component,
    Newscard2Component,
    ContactComponent,
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
