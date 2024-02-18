import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.less'
})
export class CustomerComponent {
  myLink: any = [{ url:"/admin/customers", name:"Customers"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
