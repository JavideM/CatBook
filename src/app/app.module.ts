import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CatpostsComponent } from './catposts/catposts.component';
import { AppRoutingModule } from './app-routes.module';
import { CatpostdetailComponent } from './catpostdetail/catpostdetail.component';
import { NewcatpostComponent } from './newcatpost/newcatpost.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CatpostsComponent,
    CatpostdetailComponent,
    NewcatpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
