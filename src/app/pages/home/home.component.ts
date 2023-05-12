import { Component, HostListener } from '@angular/core'
import { ScrollService } from 'src/app/services/scroll.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) { }

  @HostListener('window:scroll')
  public onScroll() {
    this.scrollService.changeScrollHeight(window.scrollY)
  }
}
