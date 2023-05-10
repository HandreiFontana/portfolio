import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { IEducation } from 'src/app/interfaces/education'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public educations: IEducation[] = []

  constructor(private httpClient: HttpClient, public languageService: LanguageService) {
    this.httpClient
      .get('assets/json/education.json')
      .subscribe({
        next: (educations: any) => {
          this.educations = educations.reverse() as IEducation[]
        }
      })
  }
}
