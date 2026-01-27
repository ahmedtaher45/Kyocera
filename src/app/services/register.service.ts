import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../interfaces/genericresponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) { }

  
  register(Modal: any){
    return this._httpClient.post<GenericResponse<string>>(environment.baseUrl, Modal);
  }

}
