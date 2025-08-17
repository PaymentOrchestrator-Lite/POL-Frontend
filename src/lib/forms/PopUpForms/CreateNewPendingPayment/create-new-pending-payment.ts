import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentEndpointService } from '../../../../service/API/PaymentsEndpoints/payments-endpoint';
import { iAddNewPendingPaymentRequest } from '../../../../service/API/PaymentsEndpoints/payments-interface';

@Component({
    selector: 'app-create-new-pending-payment-form',
    templateUrl: './create-new-pending-payment.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogContent,
        MatDialogModule
    ]
})
export class CreateNewPendingPaymentForm implements OnInit {
  public form: FormGroup;
  private formData? : iAddNewPendingPaymentRequest;

  constructor(
    private _formBuilder: FormBuilder,
    private _PaymentEndpointService: PaymentEndpointService,
    @Inject(MAT_DIALOG_DATA) public _formData: { data?: string } = {}
  ) {
    this.form = this._formBuilder.group({
      UserFk : [
        '',
        Validators.required, 
      ],
      Amount : [
        '',
        Validators.required, 
      ]
    });
  }

  ngOnInit(): void {
  }

  submitForm = async () => {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.formData = this.form.value;
    await this._PaymentEndpointService.addNewPendingPayment(this.formData!)
  };
}
