import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.less'
})
export class ParentcategoryComponent {
  myLink = [{url: "/admin/parentcategories", name: "Parent Categories"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) { }
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
