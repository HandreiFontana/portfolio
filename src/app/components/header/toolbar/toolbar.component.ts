import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public scrollY: number = 0

  public navigateTo(route: string) {
    switch (route) {
      case 'about':
        window.scrollTo(0, 562)
        break
      case '':
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
