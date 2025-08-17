import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentTableComponent } from '../../components/payment-table/payment-table-component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [
    CommonModule,
    PaymentTableComponent
  ]
})
export class HomePage implements OnInit {
  constructor() { }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}