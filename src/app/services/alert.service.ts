import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public type?: 'success' | 'warning' = 'warning'
  public text?: string = 'Erro ao enviar E-Mail'
  public isActive = false

  constructor() { }

  public success(message: string, duration?: number) {
    this.type = 'success'
    this.text = message
    this.isActive = true
    setTimeout(() => {
      this.isActive = false
    }, duration ?? environment.alertDurationDefault)
  }

  public warning(message: string, duration?: number) {
    this.type = 'warning'
    this.text = message
    this.isActive = true
    setTimeout(() => {
      this.isActive = false
    }, duration ?? environment.alertDurationDefault)
  }

  public closeAlert() {
    this.isActive = false
  }
}
