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
  myLink: any = [{ url:"/admin/customers", name:"Customers"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
