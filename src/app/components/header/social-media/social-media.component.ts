import { Component } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  constructor(public languageService: LanguageService) { }
}
