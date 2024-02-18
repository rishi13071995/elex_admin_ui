import { Component, ChangeDetectorRef, Input, AfterContentChecked } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
import { Router } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.less'
})
export class SettingComponent {
  @Input() myLink = [{url: "/admin/settings", name: "Settings"}]
  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}
  async ngOnInit() {
  }
  async ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
