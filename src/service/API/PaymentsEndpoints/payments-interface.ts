export enum ePaymentModelStatus {
  Confirmed = "Confirmed",
  Pending = "Pending",
}

export interface iGetPaymentTableResponse {
  Id: string
  UserFk: string
  Amount: number
  Status: ePaymentModelStatus
}

export interface iAddNewPendingPaymentRequest {
  UserFk: string
  Amount: number
}

export interface iMarkPaymentAsPaidRequest {
  Id: string
}