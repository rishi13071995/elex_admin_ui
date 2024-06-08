import { Component, Input } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, ModalComponent, CommonModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.less'
})
export class ParentcategoryComponent {
  @Input() myBtnName: any = "Add Parent Category"
  @Input() isModelOpen: any = false
  @Input() myAttributes = { titleName: "Add Parent Category",  keys: ["Image", "Name", "Description"], keysName: {Image: "imgUrl", Name: "name", Description: "description"}, keysValue: {}, keyTypes: { Name: "text", Description: "text",Image: "image" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }
  myTableAttributes: any = [{ keys: ["Image", "Name", "Description", "Created At.", "Modified At.", "Actions"] }, { values: [{ _id: "x2", imgUrl: "assets/rasberry.jpg", name: "Grocery", description:"Grocery products only", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"},{ _id: "x1", imgUrl: "./assets/rasberry.jpg", name: "Electronics ", description:"Electronics items only", createdAt: "20-02-2021 12:45", modifiedAt: "20-02-2021 15:23"}] }, { actions: ["edit", "delete"] }, { properties: ["img", "text", "text", "text", "text", "icon"] }]
  myLink = [{url: "/admin/parentcategories", name: "Parent Categories"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) { }
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
  async addBtn($event:any) {
    this.myAttributes.keysValue = {}
    this.isModelOpen = $event
  }
  async modalEventFunc($event: any) {
    this.myAttributes.titleName = "Add Parent Category"
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    if($event.action !== "edit") {
      console.log("delete customer", $event._id)
    } else {
      console.log("Event", $event)
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = "Edit Parent Category"
    }
  }
}
