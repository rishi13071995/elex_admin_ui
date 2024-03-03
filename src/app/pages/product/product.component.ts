import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  myTableAttributes: any = [{ keys: ["Image", "Name", "Parent Category", "Child Category", "Qty.", "MRP Price", "Discounted Price", "Tax Slab", "Total Price", "Acitve", "Created At.", "Modified At.", "Actions"] }, { values: [{ imgUrl: "assets/rasberry.jpg", name: "Rasberry", parentCategory: "Grocery", childCategory:"Dry Fruit", itemQty: 1, mrpPrice: 120.00, discountPrice: 118.20, taxSlab: "5%", totalPrice: 120.20, active: "Yes", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/products", name: "Products"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ){}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
