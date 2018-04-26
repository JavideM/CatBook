import { Component, OnInit, Input } from '@angular/core';
import { CatDetails } from '../shared/models/catdetail-model';

@Component({
  selector: 'app-catpostdetail',
  templateUrl: './catpostdetail.component.html',
  styleUrls: []
})
export class CatpostdetailComponent implements OnInit {
  @Input() cat: CatDetails;

  constructor() { }

  ngOnInit() {
  }

}
