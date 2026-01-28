import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  isClicked: boolean = false;

  constructor(private _registerService: RegisterService) {

  }

RegisterForm = new FormGroup({
    firstName:    new FormControl('', Validators.required),
    secondName:   new FormControl('', Validators.required),
    title:        new FormControl('', Validators.required),
    companyName:  new FormControl('', Validators.required),
    email:        new FormControl('', [Validators.required, Validators.email]),
  });

  // Helper getter (cleaner template)
  get f() {
    return this.RegisterForm.controls;
  }

  onSubmit() {
    this.isClicked = true;
    if (this.RegisterForm.invalid) {
      this.RegisterForm.markAllAsTouched();
      return;
    }
      let Model = this.RegisterForm.value;

      this._registerService.register(Model).subscribe({
      next: (res) => {
      
    this.isClicked = false;
          console.log(res.data); 
          alert(res.message);
      },
      error: (err) => {
    this.isClicked = false;
        console.error('Server error', err);
        console.error(err.error.message);
          alert(err.error.message);

      }
    });
  }

}
