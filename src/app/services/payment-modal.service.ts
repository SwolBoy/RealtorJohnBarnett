import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentModalService {

  private showModal = false;

  constructor() { }

  setModal(value: boolean) {
    this.showModal = value;
  }

  getModal(): boolean {
    return this.showModal;
  }
}
