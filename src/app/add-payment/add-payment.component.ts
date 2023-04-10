import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  payment: Payment= new Payment();

  constructor(private paymentService: PaymentService,
    private router: Router) { }
    msg: string=""

  ngOnInit(){
  }
  
  savePayment(){
    this.paymentService.addPayment(this.payment).subscribe( data => {
      console.log(data);
      alert("add successfully");
      this.goToPayment();
    },
    (error) => {
      this.msg = "Please enter valid details"
      alert("please fill required feilds");
      console.log("error" + error)
    });
  }
  goToPayment(){
    this.router.navigate(['/payments']);

  }
  onSubmit(){
   console.log(this.payment);

   this.savePayment();

  }
}
