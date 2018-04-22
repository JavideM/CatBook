import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatpostsComponent } from './catposts/catposts.component';
import { AppRoutingModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    CatpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
