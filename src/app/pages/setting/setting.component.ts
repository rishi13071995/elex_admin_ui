import { Component, ChangeDetectorRef, Input, AfterContentChecked, OnChanges} from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { CommonComponent } from './components/common/common.component';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonComponent, AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.less'
})
export class SettingComponent{
  myLink = [{url: "/admin/settings", name: "Settings"}]
  myTableAttributes: any= []
  isReady: boolean = false
  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}
  async ngOnInit() {

  }
  async ngOnChanges() {
  }
  async ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  async receiveMessage($event: any) {
    this.isReady = true
    this.myTableAttributes = $event
    console.log("ngonint", this.myTableAttributes)
  }
}
