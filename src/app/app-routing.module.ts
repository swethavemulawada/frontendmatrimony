import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { ViewPaymentDetailsComponent } from './view-payment-details/view-payment-details.component';

const routes: Routes = [
  { path: 'payments', component: PaymentComponent },
  { path: 'add-payment', component: AddPaymentComponent},
  { path: '',redirectTo: 'payments', pathMatch: 'full' },
  { path: 'update-payment/:id', component: UpdatePaymentComponent},
  { path: 'payment-details/:id', component:ViewPaymentDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
