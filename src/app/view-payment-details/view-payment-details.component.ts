import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-view-payment-details',
  templateUrl: './view-payment-details.component.html',
  styleUrls: ['./view-payment-details.component.css']
})
export class ViewPaymentDetailsComponent implements OnInit {

  id: number
  payment: Payment
  constructor(private route: ActivatedRoute, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.payment = new Payment();
    this.paymentService.getPaymentById(this.id).subscribe(data =>{
      this.payment =data;
    })
  }


}
