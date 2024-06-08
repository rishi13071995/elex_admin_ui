import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NzBreadCrumbModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.less'
})
export class BreadcrumbComponent {
  @Input() navLinks = [{ url: "", name: "" }];
  async ngOnInit() {
    console.log("Bread", this.navLinks[0].name)
  }
}
