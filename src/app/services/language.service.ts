import { Injectable } from '@angular/core'
import { ILanguage } from '../interfaces/language'

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

  public changeLanguage(language: string) {
    this.selectedLanguage = this.languages.find(item => item.language === language) ?? this.languages[0]
  }
}
