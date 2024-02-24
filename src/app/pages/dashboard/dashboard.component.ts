import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TableComponent } from '../../components/table/table.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DefaultComponent,NzGridModule, NzCardModule, NzIconModule, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  myTableAttributes: any = [{ keys: ["Order No.", "Customer Name", "Product Names & Qty.", "Total Price", "Order Created.", "Delivery Status", "Payment Status", "Actions"] }, { values: [{ orderNo: 1, cusName:"John Wicks" ,productName: "Maggie X 1", totalPrice: 22.20, orderCreated: "20-02-2021", deliveryStatus: "Delivered", payStatus: "Done"},{ orderNo: 2, cusName:"Pitar Sen", productName: "Sugar 1kg X 1", totalPrice: 87.50, orderCreated: "23-02-2021", deliveryStatus: "Delivered", payStatus: "Done"}] }, { actions: ["edit", "delete"] }]
  myLink: any = [{ url:"/admin/dashboard", name:"Dashboard"}]
  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }
  async ngOnInit() {
    this.breadcrumbService.links$.next(this.myLink)
  }
}
