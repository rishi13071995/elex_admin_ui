import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DefaultComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  myLink: any = [{ url:"/admin/dashboard", name:"Dashboard"}]
  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }
  async ngOnInit() {
    this.breadcrumbService.links$.next(this.myLink)
  }
}
