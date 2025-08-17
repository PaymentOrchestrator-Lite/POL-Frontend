import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import iFormService from './iFormService';
import { AlertForm } from './PopUpForms/AlertForm/alert.form';
import { CreateNewPendingPaymentForm } from './PopUpForms/CreateNewPendingPayment/create-new-pending-payment';

@Injectable({
  providedIn: 'root',
})
export default abstract class FormService extends iFormService {
  constructor(private _dialogService: MatDialog) {
    super(_dialogService);
  }
  public defaultRefreshAfterFormClose = () => { window.location.reload(); }

  public openAlertForm = (
    args: string,
    after: () => void = this.defaultRefreshAfterFormClose
  ) => this.pipe(AlertForm, args, after);

  public openCreateNewPendingPaymentForm = (
    after: () => void = this.defaultRefreshAfterFormClose
  ) => this.pipe(CreateNewPendingPaymentForm, "", after);
}