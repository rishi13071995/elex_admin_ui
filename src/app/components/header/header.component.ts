import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NzPageHeaderModule, NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  @Input() navUrl: any = [{ url:"", name: "" }];
  async ngOnInit() {
    console.log("navUrl", this.navUrl)
  }
}
