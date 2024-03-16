import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ModalService } from '../../subjects/modal.service';

@Component({
  selector: 'app-addbutton',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.less'
})
export class AddbuttonComponent {
  @Input() btnName:any = ""
  @Output() modelItemEvent = new EventEmitter<any>();
  constructor(){}
  async ngOnInit() {
  }
  async addHandler() {
    this.modelItemEvent.emit(true)
  }
}
