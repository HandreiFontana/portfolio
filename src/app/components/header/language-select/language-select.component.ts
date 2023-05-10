import { Component } from '@angular/core'
import { ILanguage } from 'src/app/interfaces/language'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  public isActiveLanguageModal = false

  constructor(public languageService: LanguageService) {}
  
  public toggleModal() {
    this.isActiveLanguageModal = !this.isActiveLanguageModal
  }

  public selectLanguage(language: string) {
    this.languageService.changeLanguage(language)
    this.toggleModal()
  }
}
