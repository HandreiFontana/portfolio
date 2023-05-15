import { Injectable } from '@angular/core'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { AlertService } from './alert.service'
import { LanguageService } from './language.service'

import { environment } from 'src/app/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MailService {
  public isLoading = false

  constructor(private alertService: AlertService, private languageService: LanguageService) { }

  sendMail(
    name: string,
    email: string,
    company: string,
    message: string
  ) {
    const payload = {
      name,
      email,
      company,
      message
    }

    const { serviceId, templateId, publicKey } = environment.mailData

    this.isLoading = true
    return emailjs.send(serviceId, templateId, payload, publicKey)
      .then((response) => {
        this.alertService.success(this.languageService.literals.main.sendMailSuccess)
        return true
      }, (error) => {
        this.alertService.warning(error)
        return false
      })
      .then((response) => {
        this.isLoading = false
        return response
      })
  }
}
