import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaymentComponent } from './payment/payment.component';
import { ViewPaymentDetailsComponent } from './view-payment-details/view-payment-details.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ViewPaymentDetailsComponent,
    UpdatePaymentComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
