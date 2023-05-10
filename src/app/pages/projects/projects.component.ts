import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public languageService: LanguageService) { }

  public navigateTo(url?: string) {
    const a = document.createElement('a')
    a.href = url ?? ''
    a.target = "_blank"
    a.click()
  }
}
