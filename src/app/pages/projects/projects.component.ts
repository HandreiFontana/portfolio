import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { IProject } from 'src/app/interfaces/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects: IProject[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('assets/json/project.json')
      .subscribe({
        next: (projects: any) => {
          this.projects = projects as IProject[]
        }
      })
  }

  public navigateTo(url?: string) {
    const a = document.createElement('a')
    a.href = url ?? ''
    a.target = "_blank"
    a.click()
  }
}
