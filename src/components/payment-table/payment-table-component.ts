import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentEndpointService } from '../../service/API/PaymentsEndpoints/payments-endpoint';
import { TablelibComponent } from '@lib/table-lib/table-lib.component';
import { iTableLibActionsArgs, iTableLibisEmptyArgs } from '@lib/table-lib/table-lib.interface';
import FormService from '@lib/forms/FormService';

@Component({
  selector: 'app-payment-table-component',
  templateUrl: './payment-table-component.html',
  imports: [TablelibComponent]
})

export class PaymentTableComponent implements OnInit {
  public _isEmpty?: iTableLibisEmptyArgs;
  public _itemsPerPage: number = 10
  public _data: Array<any> = [
  ];
  constructor(
    private _PaymentEndpointService: PaymentEndpointService,
    private _FormService: FormService,
  ) {
  }

  ngOnInit() {
    this.fetchDatabaseTable();
  }
  private fetchDatabaseTable = async () => {
    var fetchedData = await this._PaymentEndpointService.getPaymentTable();
    if (typeof fetchedData[0] == 'object')
      this._data = fetchedData as any[];
    else if (typeof fetchedData[0] == 'string') {
      this._data = [];
      this._isEmpty = {
        headers: fetchedData as Array<string>,
      };
    }
  };

  public actions: Array<iTableLibActionsArgs> = [
    {
      title: 'Add new pending payment',
      materialIconText: 'add',
      event: () => {
        this._FormService.openCreateNewPendingPaymentForm()
      },
    },
  ];
  public rowActions: Array<iTableLibActionsArgs> = [
    {
      title: 'Mark As Paid',
      event: async (id: string) => {
        await this._PaymentEndpointService.markPaymentAsPaid({ Id: id })
      },
    },
  ];
}