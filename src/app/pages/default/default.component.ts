import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbService } from '../../subjects/breadcrumb.service';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NzIconModule, NzLayoutModule, NzMenuModule, NzButtonModule, HeaderComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.less'
})
export class DefaultComponent {
  isCollapsed = false;
  @Input() navLinks: any = [{ url: "", name: "" }]
  constructor(
    private router: Router,
    private breadcrumb: BreadcrumbService,
    private cdref: ChangeDetectorRef 
  ) { }
  async ngOnInit() {
    this.breadcrumb.links$.subscribe((x)=> this.navLinks = x)
  }
  async ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  async logoutHandler() {
    this.router.navigateByUrl("/login")
  }
}
