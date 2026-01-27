import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
isClicked: boolean=false;
constructor(private _registerService: RegisterService) {
    
}

  InviteForm = new FormGroup({invitation: new FormControl('', [Validators.required, Validators.email])});

    onSubmit() {
      this.isClicked =true;
    if (this.InviteForm.invalid) {
      this.InviteForm.markAllAsTouched();
      return;
    }
      let Model = this.InviteForm.value;

      this._registerService.invite(Model).subscribe({
      next: (res) => {
          this.isClicked =false;
        if (res.success) {
          console.log(res.data); 
          alert(res.message);

        } else {
          console.error(res.message);
        }
      },
      error: (err) => {
        console.error('Server error', err);
      this.isClicked =false;

      }
    });
  }
}