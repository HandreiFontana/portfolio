import { Injectable } from '@angular/core'
import { ILanguage } from 'src/app/interfaces/language'
import { languagePtBr, languageEnUs } from 'src/assets/i18n'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages: ILanguage[] = [
    { language: 'pt-br', url: 'assets/images/flags/brazil.png' },
    { language: 'en-us', url: 'assets/images/flags/usa.png' }
  ]

  private selectedLanguage: ILanguage = this.languages[0]

  constructor() { }

  get getLanguages(): ILanguage[] {
    return this.languages
  }

  get getSelectedLanguage(): ILanguage {
    return this.selectedLanguage
  }

  get literals(): any {
    switch (this.selectedLanguage.language) {
      case 'pt-br':
        return languagePtBr
      case 'en-us':
        return languageEnUs
    }
  }

  public changeLanguage(language: string) {
    this.selectedLanguage = this.languages.find(item => item.language === language) ?? this.languages[0]
  }  
}
