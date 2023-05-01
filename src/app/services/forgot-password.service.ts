import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  checkTokenReset(token: string) {
    return this.http.get<number>(`${environment.host}/api/v1/reset/check/${token}`);
  }

  reset(token: string, password: string) {
    return this.http.post(`${environment.host}/api/v1/reset/reset/${token}`, password, {
      headers: new HttpHeaders().set('Content-Type', 'text/plain')
    });
  }

}
