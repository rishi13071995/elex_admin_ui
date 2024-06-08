import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../subjects/modal.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterModule, AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, ModalComponent, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.less'
})
export class CustomerComponent {
  @Input() isModelOpen: any = false
  @Input() myBtnName: any = "Add Customer"
  @Input() myAttributes = { titleName: "Add Customer",  keys: ["Image", "Name", "Age", "Adderss", "Phone"], keysName: {Image: "imgUrl", Name: "name", Age: "age", Adderss: "adderss", Phone: "phone"}, keysValue: {}, keyTypes: { Name: "text", Age: "text",Adderss:"text", Phone: "number", Image: "image" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }
  myTableAttributes: any = [{ keys: ["Image", "Name", "Age", "Adderss", "Phone", "Email", "Actions"] }, { values: [{_id:1, imgUrl: "assets/rasberry.jpg", name: "John Wicks", age: "29", adderss: "Kolkata", phone: "9876578493", email: "john@gmail.com"},{_id:2, imgUrl: "assets/rasberry.jpg", name: "Pitar Sen", age: "39", adderss: "Kolkata",  phone: "9876571293", email: "pitar@gmail.com"}] }, { actions: ["edit", "delete"] }]
  myLink: any = [{ url:"/admin/customers", name:"Customers"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
  async addBtn($event:any) {
    this.myAttributes.keysValue = {}
    this.isModelOpen = $event
  }
  async modalEventFunc($event: any) {
    this.myAttributes.titleName = "Add Customer"
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    if($event.action !== "edit") {
      console.log("delete customer", $event._id)
    } else {
      console.log("Event", $event)
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = "Edit Customer"
    }
  }
}
