import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [AddbuttonComponent,UploadfileComponent,SearchbarComponent,TableComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.less'
})
export class TransactionComponent {
  myTableAttributes: any = [{ keys: ["Tansaction No.", "Order No.", "Payment Created.", "Actions"] }, { values: [{ transNo: 1, orderNo:1, paymentCreated: "20-02-2021"},{ transNo: 2, orderNo:2, paymentCreated: "24-02-2021"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/transactions", name: "Transactions"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
