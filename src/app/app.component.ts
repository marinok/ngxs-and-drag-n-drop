import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Project } from './services/project';
import { ProjectsState } from './services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @Select(ProjectsState.getProjects) projects: Observable<Project[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }
}
