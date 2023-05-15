import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'
import { revertArray } from 'src/app/utils/revert-array'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public revert(array: any[]) {
    return revertArray(array)
  }
  
  constructor(public languageService: LanguageService) { }
}
