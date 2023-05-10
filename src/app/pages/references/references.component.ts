import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { IReference } from 'src/app/interfaces/reference'

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  public references: IReference[] = []
  public referenceIndex: number = 0

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('assets/json/reference.json')
      .subscribe({
        next: (projects: any) => {
          this.references = projects as IReference[]
        }
      })
  }

  public nextReference() {
    if (this.referenceIndex < this.references.length - 1) this.referenceIndex += 1
  }

  public previousReference() {
    if (this.referenceIndex !== 0) this.referenceIndex -= 1
  }
}
