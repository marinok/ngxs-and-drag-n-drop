import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { Project } from '../../models/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() items: Observable<Project[]>;
  public items$;
  constructor() {
  }

  ngOnInit() {
    this.items.subscribe(items => {
      console.log(items);
      this.items$ = items;
    }); 
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items$, event.previousIndex, event.currentIndex);
  }

}
