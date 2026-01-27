import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss'],
})
export class LandingPage {

  constructor(private router: Router) {
       
  }

  SubmitToRegisterForm()
  {
    this.router.navigate(['/register'])
  }
}
