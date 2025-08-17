import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import FormService from './FormService';
import { iAlertReponseArgs, iRedirectToWithStateReponseArgs } from './iBaseForm';
import { Router } from '@angular/router';
import CookieHelper from '@helpers/CookieHelper';

@Injectable({
    providedIn: 'root',
})
export class FormInterceptor implements HttpInterceptor {
    constructor(private readonly _formService: FormService, private readonly _Router: Router) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.body && FormInterceptor.isAlertForm(event.body)) {
                        if((event.body.alertForm as unknown as iAlertReponseArgs).refresh == false){
                            this._formService.openAlertForm((event.body.alertForm as unknown as iAlertReponseArgs).body, ()=>{})
                            return
                        }
                        this._formService.openAlertForm((event.body.alertForm as unknown as iAlertReponseArgs).body)
                    }
                    if (event.body && FormInterceptor.isRedirectToForm(event.body)) {
                        this._Router.navigate([(event.body.redirectTo as iAlertReponseArgs).body])
                    }
                    if (event.body && FormInterceptor.isRedirectToAndStateForm(event.body)) {
                        var redirectToForm: iRedirectToWithStateReponseArgs | iRedirectToWithStateReponseArgs<object> = (event.body.redirectToAndStateForm as iRedirectToWithStateReponseArgs) as iRedirectToWithStateReponseArgs
                        CookieHelper.setCookie(redirectToForm.key, { id: (redirectToForm as iRedirectToWithStateReponseArgs).state.id })

                        this._Router.navigate([(redirectToForm.redirectTo)])
                    }
                    if (event.body && FormInterceptor.isRedirectToSetState(event.body)) {
                        var redirectToForm: iRedirectToWithStateReponseArgs | iRedirectToWithStateReponseArgs<object> = (event.body.redirectToWithState as iRedirectToWithStateReponseArgs<object>)

                        CookieHelper.setCookie(redirectToForm.key, redirectToForm.state)

                        this._Router.navigate([(redirectToForm.redirectTo)])
                    }
                }
            })
        );
    }

    static isAlertForm = (args: any) => {
        return typeof args == 'object' && args.alertForm != null;
    }
    static isRedirectToForm = (args: any) => {
        return typeof args == 'object' && args.redirectTo != null;
    }
    static isRedirectToAndStateForm = (args: any) => {
        return typeof args == 'object' && args.redirectToAndStateForm != null;
    }
    static isRedirectToSetState = (args: any) => {
        return typeof args == 'object' && args.redirectToWithState != null;
    }
}