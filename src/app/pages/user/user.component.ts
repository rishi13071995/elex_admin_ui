import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  myLink = [{url: "/admin/user", name: "Users"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit(){
    this.breadcrumb.links$.next(this.myLink)
  }
}
