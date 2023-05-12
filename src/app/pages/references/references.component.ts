import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  public referenceIndex: number = 0

  constructor(public languageService: LanguageService) { }

  public nextReference() {
    if (this.referenceIndex < this.languageService.literals.references.length - 1) this.referenceIndex += 1
  }

  public previousReference() {
    if (this.referenceIndex !== 0) this.referenceIndex -= 1
  }
}
