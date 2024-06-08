import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-childcategory',
  standalone: true,
  imports: [AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, ModalComponent, CommonModule],
  templateUrl: './childcategory.component.html',
  styleUrl: './childcategory.component.less'
})
export class ChildcategoryComponent {
  @Input() myBtnName: any = "Add Child Category"
  @Input() isModelOpen: any = false
  @Input() myAttributes = { titleName: "Add Child Category",  keys: ["Image", "Name", "Description", "Parent Category"], keysName: {Image: "imgUrl", Name: "name", Description: "description", "Parent Category": "parentCategory"}, keysValue: {}, keyTypes: { Name: "text", Description: "text",Image: "image", "Parent Category": "text" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }
  myTableAttributes: any = [{ keys: ["Image", "Name", "Parent Category", "Description", "Created At.", "Modified At.", "Actions"] }, { values: [{ _id: "x1", imgUrl: "assets/rasberry.jpg", name: "Dry fruits", parentCategory: "Grocery", description:"All types. of dry fruits are available", createdAt: "20-02-2021 10:21", modifiedAt: "20-02-2021 17:30"},{ _id: "x2", imgUrl: "assets/rasberry.jpg", name: "Speaker ", parentCategory: "Electronics", description:"Speaker items", createdAt: "20-02-2021 12:45", modifiedAt: "20-02-2021 15:23"}] }, { actions: ["edit", "delete"] }]
  myLink: any = [{ url:"/admin/childcategories", name:"Child Categories"}]
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
    this.myAttributes.titleName = "Add Child Category"
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    if($event.action !== "edit") {
      console.log("delete customer", $event._id)
    } else {
      console.log("Event", $event)
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = "Edit Child Category"
    }
  }
}
