import { Component, Input} from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../subjects/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableComponent,SearchbarComponent,AddbuttonComponent,UploadfileComponent, ModalComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  @Input() isModelOpen: any = false
  @Input() myAttributes = { titleName: "Add User",  keys: ["Name", "Age", "Adderss", "Role"], keysName: { Name: "name", Age: "age", Adderss: "adderss", Role: "role"}, keysValue: {}, keyTypes: { Name: "text", Age: "text",Adderss:"text", Role: "dropdown" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }
  myTableAttributes: any = [{ keys: ["Name", "Age", "Adderss", "Role", "Actions"] }, { values: [{ _id:1, name: "John wicks", age: "29", adderss: "Kolkata", role: "admin"},{_id:2, name: "Kelvin Patty", age: "39", adderss: "Kolkata", role: "normal"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/user", name: "Users"}]
  constructor(
    private breadcrumb: BreadcrumbService,
    private modalService: ModalService
  ) {}
  async ngOnInit(){
    this.breadcrumb.links$.next(this.myLink)
  }
  async addBtn($event:any) {
    this.myAttributes.keysValue = {}
    this.isModelOpen = $event
  }
  async modalEventFunc($event: any) {
    this.myAttributes.titleName = "Add User"
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    if($event.action !== "edit") {
      console.log("delete user", $event._id)
    } else {
      console.log("Event", $event)
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = "Edit User"
    }
  }
}
