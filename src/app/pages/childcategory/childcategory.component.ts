import { Component, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-childcategory',
  standalone: true,
  imports: [],
  templateUrl: './childcategory.component.html',
  styleUrl: './childcategory.component.less'
})
export class ChildcategoryComponent {
  myLink: any = [{ url:"/admin/childcategories", name:"Child Categories"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ){}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
