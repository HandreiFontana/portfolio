import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from 'src/app/environments/environment'
import { ScrollService } from 'src/app/services/scroll.service'
import { LanguageService } from 'src/app/services/language.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public clickMVPUrl: string = 'https://clickmvp.com/'

  constructor(
    public languageService: LanguageService,
    private router: Router, 
    private scrollService: ScrollService
  ) { }

  public navigateToHome() {
    this.router.navigate([''])
  }

  public downloadCv() {
    const link = document.createElement('a')
    link.href = this.languageService.literals.main.resume
    link.target = '_blank'
    link.click()
  }

  public contact() {
    this.scrollService.scrollTo('contact')
  }
}
