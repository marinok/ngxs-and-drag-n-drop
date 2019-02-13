import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() items: Observable<Project[]>;
  constructor() {
  }

  ngOnInit() {
    /* this.items.subscribe(items => {
      console.log(items);
      this.items$ = items;
    }); */
  }

}
