import { Component, Input} from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../subjects/modal.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableComponent,SearchbarComponent,AddbuttonComponent,UploadfileComponent, ModalComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  @Input() isModelOpen: any = false
  myTableAttributes: any = [{ keys: ["Name", "Age", "Adderss", "Role", "Actions"] }, { values: [{ _id:1, name: "John wicks", age: "29", adderss: "Kolkata", role: "Admin"},{_id:2, name: "Kelvin Patty", age: "39", adderss: "Kolkata", role: "Editior"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/user", name: "Users"}]
  constructor(
    private breadcrumb: BreadcrumbService,
    private modalService: ModalService
  ) {}
  async ngOnInit(){
    this.breadcrumb.links$.next(this.myLink)
  }
  async addBtn($event:any) {
    this.isModelOpen = $event
    console.log("event", $event)
  }
}
