import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public clickMVPUrl: string = 'https://clickmvp.com/'
  
  constructor(private router: Router) { }

  public navigateToHome() {
    this.router.navigate([''])
  }
}
