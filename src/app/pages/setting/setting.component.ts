import { Component, ChangeDetectorRef, Input, AfterContentChecked, OnChanges} from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { CommonComponent } from './components/common/common.component';
import { AddbuttonComponent } from '../../components/addbutton/addbutton.component';
import { UploadfileComponent } from '../../components/uploadfile/uploadfile.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonComponent, AddbuttonComponent, UploadfileComponent, SearchbarComponent, TableComponent, CommonModule, ModalComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.less'
})
export class SettingComponent{
  myLink = [{url: "/admin/settings", name: "Settings"}]
  myTableAttributes: any= []
  myBtnName: any = ""
  myAttributes: any = []
  modalBtnName: any = ""
  isModelOpen: any = false;
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
    console.log("$event", $event)
    this.myTableAttributes = $event
  }
  async recevieMsgBtnInFo($event: any) {
    this.myBtnName = `Add ${$event}`
    this.modalBtnName = $event
    console.log("$event", $event)
  }
  async recevieAttributeMsg($event: any) {
    this.myAttributes = $event
     console.log("$event", $event)
  }

  async addBtn($event:any) {
    this.myAttributes.keysValue = {}
    this.isModelOpen = $event
  }
  async modalEventFunc($event: any) {
    this.myAttributes.titleName = this.modalBtnName
    this.isModelOpen = $event
  }
  async valueDetailsFunc($event:any) {
    console.log("Btn name", this.modalBtnName)
    if($event.action !== "edit") {
      console.log("delete customer", $event._id)
    } else {
      this.myAttributes.keysValue = $event.value
      this.isModelOpen = true
      this.myAttributes.titleName = `Edit ${this.modalBtnName}`
    }
  }
}
