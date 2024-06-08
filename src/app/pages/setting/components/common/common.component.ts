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
  @Output() myBtnEvent = new EventEmitter<any>();
  @Output() myAttributesEvent = new EventEmitter<any>();
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
   this.dataEmitFunc(this.router.url)
  }

  async getUrlPipeFunc() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: any) => {
    this.dataEmitFunc(event.url)
    this.breadcrumb.links$.next(this.navLink)
  });  
  }
  async dataEmitFunc(url: any) {
    if(url === "/admin/settings/taxdelivery-charges") {
      this.navLink[1] = {url, name: "Tax & Delivery Charges"}
      this.myBtnEvent.emit("Tax & Delivery Charges")
      this.myAttributesEvent.emit(this.attributeService.taxAndDeliveryAttributes);
      this.newItemEvent.emit(this.attributeService.taxAndDeliveryDataResp);
    }
    if(url === "/admin/settings/cms") {
      this.navLink[1] = {url, name: "CMS"}
      this.myBtnEvent.emit("CMS")
      this.myAttributesEvent.emit(this.attributeService.cmsAttributes);
      this.newItemEvent.emit(this.attributeService.cmsDataResp);
    }
    if(url === "/admin/settings/pincodes") {
      this.navLink[1] = {url, name: "Pincodes"}
      this.myBtnEvent.emit("Pincode")
      this.myAttributesEvent.emit(this.attributeService.pincodeAttributes);
      this.newItemEvent.emit(this.attributeService.pincodeDataResp);
    }
    if(url === "/admin/settings/sliders") {
      this.navLink[1] = {url, name: "Sliders"}
      this.newItemEvent.emit(this.attributeService.sliderDataResp);
    }
    if(url === "/admin/settings/contact-details") {
      this.navLink[1] = {url, name: "Contact Details"}
      this.myBtnEvent.emit("Contact Details")
      this.myAttributesEvent.emit(this.attributeService.contactAttributes);
      this.newItemEvent.emit(this.attributeService.contactUsDataResp);
    }
    if(url === "/admin/settings/social-links") {
      this.navLink[1] = {url, name: "Social Links"}
      this.myBtnEvent.emit("Social Links")
      this.myAttributesEvent.emit(this.attributeService.socialLinkAttributes);
      this.newItemEvent.emit(this.attributeService.socialLinkDataResp);
    }
  }
}
