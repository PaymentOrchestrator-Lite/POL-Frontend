import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iHttpRequest } from './iHttpService';
import { EnvConfig } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
  };
  constructor(private _httpClient: HttpClient) {}

  public request<ReturnType>(request: iHttpRequest): Promise<ReturnType> {
    return new Promise((res, rej) => {
      const url = `${
        EnvConfig.isDev ? EnvConfig.backend_url_dev : EnvConfig.backend_url
      }${request.path}`;
      var httpOptions = {
        headers: this.DEFAULT_HEADERS,
      };
      return this._httpClient
        .request<ReturnType>(request.type, url, {
          body: request.body,
          ...httpOptions,
        })
        .subscribe({
          next: (value) => {
            res(value as ReturnType);
          },
          error(err) {
            rej(err.error);
          },
        });
    });
  }
  public requestForDownloadFile(request: iHttpRequest): Promise<void> {
    return new Promise((res, rej) => {
      const url = `${
        EnvConfig.isDev ? EnvConfig.backend_url_dev : EnvConfig.backend_url
      }${request.path}`;
  
      const httpOptions = {
        headers: this.DEFAULT_HEADERS,
        responseType: 'blob' as 'json', // Specify responseType as 'blob'
      };
  
      // Explicitly use POST method for the file request and add the correct typing
      this._httpClient
        .post(url, request.body, {
          ...httpOptions,
          observe: 'response', // Observe the full response to handle file name if needed
          responseType: 'blob' as 'json', // Ensure responseType is correctly typed
        })
        .subscribe({
          next: (response: any) => {
            // Handle file download
            const blob: Blob = response.body;
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            // Optionally use a dynamic filename from response headers or request
            const contentDisposition = response.headers.get('Content-Disposition'); 
            const filenaxme = response.headers.get('filename');
            // @ts-ignore
            let fileName = filenaxme || 'downloadedFile.pdf';
            if (contentDisposition) {
              const matches = /filename="([^"]*)"/.exec(contentDisposition);
              if (matches != null && matches[1]) { 
                fileName = matches[1];
              }
            }
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            res();
          },
          error: (err) => {
            rej(err.error);
          },
        });
    });
  }
}