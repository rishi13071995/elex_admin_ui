import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.less'
})
export class OrderComponent {
  myTableAttributes: any = [{ keys: ["Order No.", "Customer Name", "Product Names & Qty.", "Total Price", "Order Created.", "Delivery Status", "Payment Status", "Actions"] }, { values: [{_id:1, orderNo: 1, cusName:"John Wicks" ,productName: "Maggie X 1", totalPrice: 22.20, orderCreated: "20-02-2021", deliveryStatus: "Delivered", payStatus: "Done"},{_id:2, orderNo: 2, cusName:"Pitar Sen", productName: "Sugar 1kg X 1", totalPrice: 87.50, orderCreated: "23-02-2021", deliveryStatus: "Delivered", payStatus: "Done"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/orders", name: "Orders"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
