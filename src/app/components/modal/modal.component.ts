import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../subjects/modal.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NzModalModule, NzButtonModule, FormsModule, NzFormModule, CommonModule, NzDropDownModule],
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
  constructor() {}

  async ngOnInit() {
    this.keys = this.dataAttributes.keys
    this.keysName = this.dataAttributes.keysName
    this.keysValue = this.dataAttributes.keysValue
    this.keyTypes = this.dataAttributes.keyTypes
    this.dropdowns = this.dataAttributes.dropdowns
    this.menuBtnName = this.dataAttributes.dropdowns.keys[0] 
    console.log("keys", this.keys)
    console.log("keysName", this.keysName)
    console.log("keysValue", this.keysValue)
    console.log("dropdowns", this.dropdowns)
    console.log("keyTypes", this.keyTypes)

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
}
