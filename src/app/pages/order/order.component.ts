import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.less'
})
export class OrderComponent {
  myLink = [{url: "/admin/orders", name: "Orders"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
