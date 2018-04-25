import { Component, OnInit, Output, Input } from '@angular/core';
import { CatDetails } from '../shared/models/catdetail-model';

@Component({
  selector: 'app-newcatpost',
  templateUrl: './newcatpost.component.html',
  styleUrls: ['./newcatpost.component.css']
})
export class NewcatpostComponent implements OnInit {
  cat: CatDetails;
  @Input() postCat: (cat: CatDetails) => boolean;
  postClick: () => void = function(){
    if(this.postCat(this.cat)){
      this.cat = new CatDetails();
    }
  }

  constructor() {
      this.cat = new CatDetails();
   }

  ngOnInit() {
  }

}
