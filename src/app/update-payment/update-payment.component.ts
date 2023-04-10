import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
 /*msg:string;
  id: number;
  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paymentService.getPaymentById(this.id).subscribe(data =>{
      
      this.payment = data;
    },error => console.log(error));
  }
  onSubmit(){
    this.paymentService.updatePayment(this.id,this.payment).subscribe(data =>{
      alert("updated successfully")
      this.goToPayment();
    },
    (error) => {
      this.msg = "Please enter valid details"
      alert("enter all fields");
      console.log("error" + error)

  });
}
  goToPayment(){
    this.router.navigate(['/payments']);
  }

}

*/
id: number;
  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paymentService.getPaymentById(this.id).subscribe(data =>{
      this.payment = data;
    },error => console.log(error));
  }
  onSubmit(){
    this.paymentService.updatePayment(this.id,this.payment).subscribe(data =>{
      alert("updated successfully")
      this.goToPayment();
    })
  }
  goToPayment(){
    this.router.navigate(['/payments']);
  }

}
