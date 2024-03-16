import { Component, Input } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, CommonModule, ModalComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  @Input() isModelOpen: any = false
  @Input() myBtnName: any = "Add Product"
  @Input() myAttributes = { titleName: "Add Product",  keys: ["Image", "Name", "Parent Category", "Child Category", "Qty.", "MRP Price", "Discounted Price", "Tax Slab", "Total Price", "Acitve"], keysName: {Image: "imgUrl", Name: "name", "Parent Category": "parentCategory", "Child Category": "childCategory", "Qty.": "itemQty",  "MRP Price": "mrpPrice", "Discounted Price": "discountPrice", "Tax Slab": "taxSlab", "Total Price": "totalPrice", "Acitve": "active" }, keysValue: {}, keyTypes: { Name: "text", Age: "text",Adderss:"text", Phone: "number", Image: "image", "Parent Category": "text", "Child Category": "text", "Qty.": "number", "MRP Price": "number", "Discounted Price": "number", "Tax Slab": "text", "Total Price": "number", "Acitve": "text"},dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }
  myTableAttributes: any = [{ keys: ["Image", "Name", "Parent Category", "Child Category", "Qty.", "MRP Price", "Discounted Price", "Tax Slab", "Total Price", "Acitve", "Created At.", "Modified At.", "Actions"] }, { values: [{ _id:1, imgUrl: "assets/rasberry.jpg", name: "Rasberry", parentCategory: "Grocery", childCategory:"Dry Fruit", itemQty: 1, mrpPrice: 120.00, discountPrice: 118.20, taxSlab: "5%", totalPrice: 120.20, active: "Yes", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/products", name: "Products"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ){}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
  async addBtn($event:any) {
    this.myAttributes.keysValue = {}
    this.isModelOpen = $event
  }
  async modalEventFunc($event: any) {
    this.myAttributes.titleName = "Add Product"
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    if($event.action !== "edit") {
      console.log("delete customer", $event._id)
    } else {
      console.log("Event", $event)
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = "Edit Product"
    }
  }
}
