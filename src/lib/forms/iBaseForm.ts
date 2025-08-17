
export interface form_value_path<form_data> {
  form: {
    value: form_data;
  };
}


export interface iAlertReponseArgs {
  body: string
  refresh : boolean
}

export interface iRedirectToWithStateReponseArgs<T = any> {
  redirectTo: string
  key: string
  state: T
}