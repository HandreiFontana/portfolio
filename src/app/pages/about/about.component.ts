import { HttpClient } from '@angular/common/http'
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
  public about: string[] = []
  public tools: IKeyValue[] = []
  public basic: IKeyValue[] = []

  constructor(private httpClient: HttpClient, public languageService: LanguageService) {
    this.httpClient
      .get('assets/json/about.json')
      .subscribe({
        next: ({ about, tools, basic }: IResponse) => {
          this.about = about as string[]
          this.tools = tools as IKeyValue[]
          this.basic = basic as IKeyValue[]
        }
      })
  }
}
