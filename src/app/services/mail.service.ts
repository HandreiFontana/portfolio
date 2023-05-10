import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

import { environment } from 'src/app/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private subscriptions = new Subscription()

  constructor() { }

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

    emailjs.send(serviceId, templateId, payload, publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
}
