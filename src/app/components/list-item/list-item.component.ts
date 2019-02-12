import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/services/project';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() item: Project;

  constructor() { }

  ngOnInit() {
  }

}
