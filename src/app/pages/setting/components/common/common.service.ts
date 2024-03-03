import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  taxAndDeliveryDataResp : any = [{ keys: ["Name", "Tax Slabe", "Actions"] }, { values: [{ name: "Grocery", value: "20%"},{ name: "Food", value: "15%"}] }, { actions: ["edit", "delete"] }]
  cmsDataResp : any = [{ keys: ["Name", "Body", "Actions"] }, { values: [{ name: "About Us", value: "<h1>About Us</h1>We are using namashkar<p></p>"}] }, { actions: ["edit", "delete"] }]
  pincodeDataResp : any = [{ keys: ["Name", "Pincode", "Actions"] }, { values: [{ name: "Baghbazar", value: "700029"}] }, { actions: ["edit", "delete"] }]
  contactUsDataResp : any = [{ keys: ["Name", "Details", "Actions"] }, { values: [{ name: "Email", value: "namashkar@gmail.com"}] }, { actions: ["edit", "delete"] }]
  socialLinkDataResp : any = [{ keys: ["Name", "Links", "Actions"] }, { values: [{ name: "Facebook", value: "http://localhost:3000"}] }, { actions: ["edit", "delete"] }]
  sliderDataResp = [{ keys: ["Name", "Banner Position", "Actions"] }, { values: [{ name: "Header", value: "Header"}] }, { actions: ["edit", "delete"] }]
  constructor() { }
}
