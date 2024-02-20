import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [NzInputModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.less'
})
export class SearchbarComponent {

}
