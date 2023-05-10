import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollTo(htmlId?: string): void {
    if (!htmlId) {
      window.scrollTo(0, 0)
      return
    }

    const element = document.getElementById(htmlId)
    element?.scrollIntoView()
  }
}
