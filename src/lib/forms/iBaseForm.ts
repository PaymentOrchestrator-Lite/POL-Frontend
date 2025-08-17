import { iCookieIdObject } from "../../state/cookies/iCookieState";

export interface form_value_path<form_data> {
  form: {
    value: form_data;
  };
}


export interface iAlertReponseArgs {
  body: string
  refresh : boolean
}

export interface iRedirectToWithStateReponseArgs<T = iCookieIdObject> {
  redirectTo: string
  key: string
  state: T
}