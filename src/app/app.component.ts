import { Component } from '@angular/core';
import { Projects } from './services/projects';
import { Project } from './services/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public progects: Array<Project> = Projects;
  constructor() { }
}
