import { Component, HostListener } from '@angular/core'
import { ScrollService } from 'src/app/services/scroll.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public scrollY: number = 0

  constructor(private scrollService: ScrollService) { }

  public navigateTo(route: string) {
    switch (route) {
      case 'home':
        this.scrollService.scrollTo()
        break
      default:
        this.scrollService.scrollTo(route)
        break
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    console.clear()
    console.log(this.scrollY)
    this.scrollY = window.scrollY
  }
}
