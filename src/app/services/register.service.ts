import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../interfaces/genericresponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) { }

    private proxy(endpoint: string): string {
    // جرب واحد من دول:
    
    // Option 1 (جرب ده الأول):
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(environment.API_BASE + endpoint)}`;}
  
  register(Modal: any){
    return this._httpClient.post<GenericResponse<string>>(this.proxy('/Auth'), Modal);
  }
  invite(Modal: any){
    return this._httpClient.post<GenericResponse<string>>(this.proxy('/Auth/invite'), Modal);
  }
}
