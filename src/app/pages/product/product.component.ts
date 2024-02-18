import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  myLink = [{url: "/admin/products", name: "Products"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ){}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
