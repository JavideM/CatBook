import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catpostdetail',
  templateUrl: './catpostdetail.component.html',
  styleUrls: ['./catpostdetail.component.css']
})
export class CatpostdetailComponent implements OnInit {
  @Input() cat: string;

  constructor() { }

  ngOnInit() {
  }

}
