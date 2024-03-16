import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../subjects/modal.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NzModalModule, NzButtonModule, FormsModule, NzFormModule, CommonModule, NzDropDownModule, NzUploadModule,NzIconModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.less'
})
export class ModalComponent {
  @Input() dataAttributes: any = { titleName: "" ,  keys:[] , keysName:{} , keysValue: {}, keyTypes: {}, dropdowns : [] } 
  @Output() modalEvent = new EventEmitter<any>();
  keys: any = []
  keysName: any = {}
  keysValue: any = {}
  keyTypes: any = {}
  dropdowns: any = []
  isVisible = true;
  menuBtnName : any = ""
  constructor(
    private msg: NzMessageService
  ) {}

  async ngOnInit() {
    this.keys = this.dataAttributes.keys
    this.keysName = this.dataAttributes.keysName
    this.keysValue = this.dataAttributes.keysValue
    this.keyTypes = this.dataAttributes.keyTypes
    this.dropdowns = this.dataAttributes.dropdowns
    this.menuBtnName = Object.keys(this.dropdowns.value[0]).find(key => this.dropdowns.value[0][key] === this.keysValue.role) ? Object.keys(this.dropdowns.value[0]).find(key => this.dropdowns.value[0][key] === this.keysValue.role) : this.dropdowns.keys[0]
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.modalEvent.emit(false)
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.modalEvent.emit(false)
  }
  log() {
    console.log("hitted")
  }
  dropdownFunc(key: any, value: any) {
    this.menuBtnName = key
    console.log("menuBtnName", this.menuBtnName)
  }
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
      // this.myAttributes.keysValue
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
