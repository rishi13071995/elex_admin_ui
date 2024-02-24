import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.less'
})
export class ParentcategoryComponent {
  myTableAttributes: any = [{ keys: ["Name", "Description", "Created At.", "Modified At.", "Actions"] }, { values: [{ name: "Grocery", description:"Grocery products only", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"},{ name: "Electronics ", description:"Electronics items only", createdAt: "20-02-2021 12:45", modifiedAt: "20-02-2021 15:23"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/parentcategories", name: "Parent Categories"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) { }
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
