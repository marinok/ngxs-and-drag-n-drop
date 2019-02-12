import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../services/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() items ?: Observable<Project[]>;
  public items$: Array<Project>;
  constructor() {
  }

  ngOnInit() {

    /* this.items.subscribe(items => {
      console.log(items);
      this.items$ = items;
    }); */
  }

}
