import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catposts',
  templateUrl: './catposts.component.html',
  styleUrls: ['./catposts.component.css']
})
export class CatpostsComponent implements OnInit {
  cats: string[] = [
    'Buttons',
    'Waffles',
    'Biscuit'
  ];

  constructor() { }

  ngOnInit() {
  }

}
