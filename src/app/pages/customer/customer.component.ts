import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterModule, AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.less'
})
export class CustomerComponent {
  myTableAttributes: any = [{ keys: ["Name", "Age", "Adderss", "Phone", "Email", "Actions"] }, { values: [{_id:1, name: "John Wicks", age: "29", adderss: "Kolkata", phone: "9876578493", email: "john@gmail.com"},{_id:2, name: "Pitar Sen", age: "39", adderss: "Kolkata",  phone: "9876571293", email: "pitar@gmail.com"}] }, { actions: ["edit", "delete"] }]
  myLink: any = [{ url:"/admin/customers", name:"Customers"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
