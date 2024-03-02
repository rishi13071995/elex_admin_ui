import { Component, Input, VERSION, AfterContentChecked, ChangeDetectorRef, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { BreadcrumbService } from '../../../../subjects/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonService } from './common.service';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [],
  templateUrl: './common.component.html',
  styleUrl: './common.component.less'
})
export class CommonComponent implements OnInit, AfterContentChecked, OnChanges {
  @Input() navLink: any = [{ url: "/admin/settings", name: "Settings" }]
  @Output() newItemEvent = new EventEmitter<any>();
  myTableAttributes: any = []
  constructor(
    private breadcrumb: BreadcrumbService,
    private router: Router,
    private cdref: ChangeDetectorRef,
    private attributeService: CommonService
  ) {}
  async ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  async ngOnInit() {
    this.getUrlFunc()
  }
  async ngOnChanges() {
    this.getUrlPipeFunc()
  }

  async getUrlFunc() {
    if(this.router.url === "/admin/settings/taxdelivery-charges") {
      this.myTableAttributes = [{ keys: ["Name", "Tax Slabe", "Actions"] }, { values: [{ name: "Grocery", taxSlab: "20%"},{ name: "Food", taxSlab: "15%"}] }, { actions: ["edit", "delete"] }]
      this.newItemEvent.emit(this.myTableAttributes);
    }
    if(this.router.url === "/admin/settings/cms") {
      this.myTableAttributes = [{ keys: ["Name", "Description", "Actions"] }, { values: [{ name: "Grocery", taxSlab: "20%"},{ name: "Food", taxSlab: "15%"}] }, { actions: ["edit", "delete"] }]
      this.newItemEvent.emit(this.myTableAttributes);
    }
    if(this.router.url === "/admin/settings/pincodes") {
      this.newItemEvent.emit("Pincodes.");
    }
    if(this.router.url === "/admin/settings/sliders") {
      this.newItemEvent.emit("Sliders.");
    }
    if(this.router.url === "/admin/settings/contact-details") {
      this.newItemEvent.emit("Contact Details.");
    }
    if(this.router.url === "/admin/settings/social-links") {
      this.newItemEvent.emit("Social Links.");
    }
  }

  async getUrlPipeFunc() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: any) => {
    if(event.url === "/admin/settings/taxdelivery-charges") {
      this.navLink[1] = {url: event.url, name: "Tax & Delivery Charges"}
      this.newItemEvent.emit(this.myTableAttributes);
    }
    if(event.url === "/admin/settings/cms") {
      this.navLink[1] = {url: event.url, name: "CMS"}
      this.myTableAttributes = [{ keys: ["Name", "Description", "Actions"] }, { values: [{ name: "Grocery", taxSlab: "20%"},{ name: "Food", taxSlab: "15%"}] }, { actions: ["edit", "delete"] }]
      this.newItemEvent.emit(this.myTableAttributes);
    }
    if(event.url === "/admin/settings/pincodes") {
      this.navLink[1] = {url: event.url, name: "Pincodes"}
      this.newItemEvent.emit("hellow....pincodes");
    }
    if(event.url === "/admin/settings/sliders") {
      this.navLink[1] = {url: event.url, name: "Sliders"}
      this.newItemEvent.emit("hellow....sliders");
    }
    if(event.url === "/admin/settings/contact-details") {
      this.navLink[1] = {url: event.url, name: "Contact Details"}
      this.newItemEvent.emit("hellow....contact details");
    }
    if(event.url === "/admin/settings/social-links") {
      this.navLink[1] = {url: event.url, name: "Social Links"}
      this.newItemEvent.emit("hellow....social links");
    }
    this.breadcrumb.links$.next(this.navLink)
  });  
  }
}
