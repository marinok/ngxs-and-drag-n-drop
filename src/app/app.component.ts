import { Component } from '@angular/core';
import { Projects } from './services/projects';
import { Project } from './services/project';
import { ProjectsService } from './services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public progects: Array<Project> = Projects;
  public projects$: Observable<Project[]>;
  constructor(public projectsService: ProjectsService) {
    this.projects$ = projectsService.getProjects();
    this.projects$.subscribe(items => {
      console.log(items);
    });
    // console.log(this.projects$);
  }
}
