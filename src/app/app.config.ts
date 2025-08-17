import {
  PreloadAllModules,
  PreloadingStrategy,
  provideRouter,
} from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../service/Http/HttpErrorInterceptor';
import { LoadingInterceptor } from '../state/Loading/LoadingInterceptor';
import { FormInterceptor } from '@lib/forms/FormInterceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: PreloadingStrategy, useClass: PreloadAllModules },
    provideAnimations(),
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: FormInterceptor, multi: true },
  ],
};