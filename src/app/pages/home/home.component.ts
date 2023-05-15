import { Component } from '@angular/core'
import { MailService } from 'src/app/services/mail.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public mailService: MailService) { }
}
