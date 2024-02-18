import { Component } from '@angular/core';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.less'
})
export class TransactionComponent {
  myLink = [{url: "/admin/transactions", name: "Transactions"}]
  constructor(
    private breadcrumb: BreadcrumbService
  ) {}
  async ngOnInit() {
    this.breadcrumb.links$.next(this.myLink)
  }
}
