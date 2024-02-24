import { Component, Input } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableComponent,SearchbarComponent,AddbuttonComponent,UploadfileComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  myTableAttributes: any = [{ keys: ["Name", "Age", "Adderss", "Role", "Actions"] }, { values: [{ name: "John wicks", age: "29", adderss: "Kolkata", role: "Admin"},{ name: "Kelvin Patty", age: "39", adderss: "Kolkata", role: "Editior"}] }, { actions: ["edit", "delete"] }]
  myLink = [{url: "/admin/user", name: "Users"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit(){
    this.breadcrumb.links$.next(this.myLink)
  }
}
