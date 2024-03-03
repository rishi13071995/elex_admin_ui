import { Component,Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule, FormsModule, CommonModule, NzIconModule, NzSpinModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.less'
})
export class TableComponent {
  @Input() tableAttributes: any = [{ keys: [] }, { values: [] }, { actions: [] }]
  nameKeys: any = []
  listOfData: any = []
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: any = [];
  setOfCheckedId = new Set<any>();

  updateCheckedSet(_id: any, checked: boolean): void {
    console.log(_id)
    if (checked) {
      this.setOfCheckedId.add(_id);
    } else {
      this.setOfCheckedId.delete(_id);
    }
  }

  onItemChecked(_id: any, checked: boolean): void {
    console.log(_id)
    this.updateCheckedSet(_id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item: any) => this.updateCheckedSet(item._id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: any): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item: any) => this.setOfCheckedId.has(item._id));
    this.indeterminate = this.listOfCurrentPageData.some((item: any) => this.setOfCheckedId.has(item._id)) && !this.checked;
  }

  ngOnInit(): void {
    console.log("tableAttributes", this.tableAttributes)
    this.nameKeys = Object.keys(this.tableAttributes[1].values[0])
    this.listOfData = this.tableAttributes[1].values
  }
}
