import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.api.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class OpenXblService {
  constructor(private http: HttpClient) {}

  connect(code: string): any {
    return this.http
      .post(baseUrl + `openxbl/connect`, {
        code,
        app_key: 'eb9ab783-e41f-d428-0319-fb2d4d4a0d71',
      })
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
}
