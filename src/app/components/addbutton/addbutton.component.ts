import { Component, Output, EventEmitter   } from '@angular/core';
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
  @Output() modelItemEvent = new EventEmitter<any>();
  constructor(){}
  async ngOnInit() {
  }
  async addHandler() {
    this.modelItemEvent.emit(true)
  }
}
