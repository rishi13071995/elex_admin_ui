import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableComponent,SearchbarComponent,AddbuttonComponent,UploadfileComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  myLink = [{url: "/admin/user", name: "Users"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit(){
    this.breadcrumb.links$.next(this.myLink)
  }
}
