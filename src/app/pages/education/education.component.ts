import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'
import { revertArray } from 'src/app/utils/revert-array'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public revert(array: any[]) {
    return revertArray(array)
  }
  
  constructor(public languageService: LanguageService) { }
}
