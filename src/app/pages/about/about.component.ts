import { Component } from '@angular/core'
import { IKeyValue } from 'src/app/interfaces/key-value'
import { LanguageService } from 'src/app/services/language.service'

interface IResponse {
  about?: string[]
  tools?: IKeyValue[]
  basic?: IKeyValue[]
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public tools: IKeyValue[] = []
  public basic: IKeyValue[] = []

  constructor(public languageService: LanguageService) { }
}
