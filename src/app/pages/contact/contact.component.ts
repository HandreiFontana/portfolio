import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { LanguageService } from 'src/app/services/language.service'
import { MailService } from 'src/app/services/mail.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private formBuilder: FormBuilder,
    public languageService: LanguageService,
    private mailService: MailService
  ) { }

  public mailForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    company: [null, Validators.required],
    description: [null, Validators.required]
  })

  public sendMail() {
    if (this.mailForm.valid) {
      const { name, email, company, description } = this.mailForm.value

      const message = description
      
      this.mailService.sendMail(
        name!,
        email!,
        company!,
        message!
      )
    }
  }
}
