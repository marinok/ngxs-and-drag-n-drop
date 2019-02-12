import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../services/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() items: Array<Project>;

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
