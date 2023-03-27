import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ISocialMedia } from 'src/app/interfaces/social-media'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  public socialMedias: ISocialMedia[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get('assets/json/social-media.json')
      .subscribe({
        next: (res) => this.socialMedias = res as ISocialMedia[]
      })
  }
}
