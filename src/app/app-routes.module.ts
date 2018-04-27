import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatpostsComponent } from './posts/catposts/catposts.component';

const routes: Routes = [{
    path: '', component: CatpostsComponent
}];

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {

}
