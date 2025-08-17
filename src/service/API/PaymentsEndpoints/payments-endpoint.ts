import { Injectable } from '@angular/core';
import { iAddNewPendingPaymentRequest, iGetPaymentTableResponse, iMarkPaymentAsPaidRequest } from './payments-interface';
import { HttpService } from '../../Http/HttpService';

@Injectable({
  providedIn: 'root',
})
export class PaymentEndpointService {
  constructor(private readonly _httpService: HttpService) { }

  public getPaymentTable = async () => {
    return await this._httpService.request<Array<iGetPaymentTableResponse> | Array<string>>({
      path: "api/Payment/getPaymentTable",
      type: "GET",
    })
  }

  public addNewPendingPayment = async (args : iAddNewPendingPaymentRequest) => {
    return await this._httpService.request({
      path: "api/Payment/addNewPendingPayment",
      type: "POST",
      body : args
    })
  }

  public markPaymentAsPaid = async (args : iMarkPaymentAsPaidRequest) => {
    return await this._httpService.request({
      path: "api/Payment/MarkPaymentAsPaid",
      type: "POST",
      body : args
    })
  }
}