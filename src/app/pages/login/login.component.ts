import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ActivatedRoute, Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormControl,FormsModule,  FormGroup,ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzCardModule, NzInputModule, NzIconModule,NzButtonModule, NzLayoutModule, FormsModule, NzGridModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  validateForm: FormGroup<{
    userEmail: FormControl<string>;
    userPassword: FormControl<string>;
  }> = this.fb.group({
    userEmail: ['', [Validators.required]],
    userPassword: ['', [Validators.required]],
  });
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router 
  ) {}
  async submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      if (this.validateForm.value.userEmail !== "namashkar@gmail.com" || this.validateForm.value.userPassword !== "12345678") 
    return alert("Email or password wrong, please try again!")
    this.router.navigateByUrl("/admin/dashboard")
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
