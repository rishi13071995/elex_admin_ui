import { Component, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-childcategory',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent],
  templateUrl: './childcategory.component.html',
  styleUrl: './childcategory.component.less'
})
export class ChildcategoryComponent {
  myTableAttributes: any = [{ keys: ["Name", "Parent Category", "Description", "Created At.", "Modified At.", "Actions"] }, { values: [{ name: "Dry fruits", parentCategory: "Grocery", description:"All types. of dry fruits are available", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"},{ name: "Speaker ", parentCategory: "Electronics", description:"Speaker items", createdAt: "20-02-2021 12:45", modifiedAt: "20-02-2021 15:23"}] }, { actions: ["edit", "delete"] }]
  myLink: any = [{ url:"/admin/childcategories", name:"Child Categories"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ){}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
