import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { IWorkExperience } from 'src/app/interfaces/work-experience'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public workExperiences: IWorkExperience[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get('assets/json/work-experience.json')
      .subscribe({
        next: (workExperiences: any) => {
          this.workExperiences = workExperiences as IWorkExperience[]
        }
      })
  }
}
