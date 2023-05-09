import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs'

import { environment } from 'src/app/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private subscriptions = new Subscription()

  constructor(private httpClient: HttpClient) { }

  async sendMail(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<void> {
    const payload = {
      name,
      _replyto: email,
      message,
      _subject: subject
    }

    this.subscriptions.add(
      this.httpClient
        .post(`https://mailthis.to/${environment.particularMail}`, payload)
        .subscribe({
          next: res => console.log(res),
          error: err => console.log(err)
        })
    )
  }
}
