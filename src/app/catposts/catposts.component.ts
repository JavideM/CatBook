import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catposts',
  templateUrl: './catposts.component.html',
  styleUrls: ['./catposts.component.css','../../../node_modules/bootstrap-css-only/css/bootstrap.min.css']
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
