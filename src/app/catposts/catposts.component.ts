import { Component, OnInit } from '@angular/core';
import { CatDetails } from '../shared/models/catdetail-model';

@Component({
  selector: 'app-catposts',
  templateUrl: './catposts.component.html',
  styleUrls: ['./catposts.component.css']
})
export class CatpostsComponent implements OnInit {
  cats: CatDetails[] = [
    { name: 'Buttons', gender: 'M', age: 1, description: '...', color: 'black',
    profileImg: 'https://pbs.twimg.com/profile_images/2370446440/6e2jwf7ztbr5t1yjq4c5_400x400.jpeg' },
    { name: 'Waffles', gender: 'M', age: 1, description: '...', color: 'black',
    profileImg: 'https://pbs.twimg.com/profile_images/2370446440/6e2jwf7ztbr5t1yjq4c5_400x400.jpeg' },
    { name: 'Biscuit', gender: 'M', age: 1, description: '...', color: 'black',
    profileImg: 'https://pbs.twimg.com/profile_images/2370446440/6e2jwf7ztbr5t1yjq4c5_400x400.jpeg' },
    { name: 'Kuro', gender: 'M', age: 1, description: '...', color: 'black',
    profileImg: 'https://pbs.twimg.com/profile_images/2370446440/6e2jwf7ztbr5t1yjq4c5_400x400.jpeg' }
  ];

  addCat: (CatDetails) => boolean = function(cat: CatDetails): boolean{
    this.cats.push(cat);
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
