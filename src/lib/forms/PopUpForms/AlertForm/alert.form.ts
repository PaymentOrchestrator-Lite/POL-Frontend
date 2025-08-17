import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-alert-form',
    templateUrl: './alert.form.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogActions,
        MatDialogContent,
        MatDialogModule
    ]
})
export class AlertForm {

  constructor(
    private _dialogRef: MatDialogRef<AlertForm>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _formData: { data?: string } = {}
  ) {
  }
}