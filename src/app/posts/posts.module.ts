import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewcatpostComponent } from './newcatpost/newcatpost.component';
import { CatpostdetailComponent } from './catpostdetail/catpostdetail.component';
import { CatpostsComponent } from './catposts/catposts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CatpostsComponent,
    CatpostdetailComponent,
    NewcatpostComponent
  ],
  exports: [
    CatpostsComponent,
    CatpostdetailComponent,
    NewcatpostComponent]
})
export class PostsModule { }
