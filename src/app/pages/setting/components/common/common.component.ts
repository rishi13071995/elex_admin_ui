import { Component, Input, VERSION, AfterContentChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../subjects/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [],
  templateUrl: './common.component.html',
  styleUrl: './common.component.less'
})
export class CommonComponent implements OnInit, AfterContentChecked {
  @Input() navLink: any = [{ url: "/admin/settings", name: "Settings" }]
  constructor(
    private breadcrumb: BreadcrumbService,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}
  async ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  async ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: any) => {
    console.log("current url", event.url)
    if(event.url === "/admin/settings/taxdelivery-charges") {
      this.navLink[1] = {url: event.url, name: "Tax & Delivery Charges"}
    }
    if(event.url === "/admin/settings/cms") {
      this.navLink[1] = {url: event.url, name: "CMS"}
    }
    if(event.url === "/admin/settings/pincodes") {
      this.navLink[1] = {url: event.url, name: "Pincodes"}
    }
    if(event.url === "/admin/settings/sliders") {
      this.navLink[1] = {url: event.url, name: "Sliders"}
    }
    if(event.url === "/admin/settings/contact-details") {
      this.navLink[1] = {url: event.url, name: "Contact Details"}
    }
    if(event.url === "/admin/settings/social-links") {
      this.navLink[1] = {url: event.url, name: "Social Links"}
    }
    this.breadcrumb.links$.next(this.navLink)
  });    
  }
}
