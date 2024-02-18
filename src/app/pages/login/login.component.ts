import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ActivatedRoute, Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzCardModule, NzInputModule, NzIconModule,NzButtonModule, NzLayoutModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  index1 = 0;
  index2 = 0;
  value = { email: null, password: null }
  constructor(
    private router: Router,
  ) { }
  async loginHandler() {
    if (this.value.email !== "namashkar@gmail.com" || this.value.password !== "12345678") 
    return alert("Email or password wrong, please try again!")
    console.log("email", this.value.email)
    console.log("password", this.value.password)
    this.router.navigateByUrl("/admin/dashboard")
  }
}
