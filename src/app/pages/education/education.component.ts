import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(public languageService: LanguageService) { }
}
