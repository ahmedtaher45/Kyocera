import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs';

declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
   

export class AppComponent {
  isSuccess = false;
  successMessage: any;
  opened=false;
  CurrentTap: any
  loader:boolean=true;
  ActiveList:any  
  SelectedActiveList:any
  val:any='en';
  
  constructor(private _TranslateService: TranslateService ,
    public _CookieService:CookieService, private _Router:Router, private _ActivatedRoute: ActivatedRoute
  ){

  }
}
