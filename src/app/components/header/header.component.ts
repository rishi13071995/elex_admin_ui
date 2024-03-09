import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NzPageHeaderModule, NzIconModule, NzDropDownModule, NzButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  @Input() navUrl: any = [{ url:"", name: "" }];
  constructor(
    private router: Router
  ) {}
  async ngOnInit() {
  }
  async logoutHandler() {
    this.router.navigateByUrl("/login")
  }
}
