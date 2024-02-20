import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-uploadfile',
  standalone: true,
  imports: [NzButtonModule, NzIconModule,NzSelectModule],
  templateUrl: './uploadfile.component.html',
  styleUrl: './uploadfile.component.less'
})
export class UploadfileComponent {

}
