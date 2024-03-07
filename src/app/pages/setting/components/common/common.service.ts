import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  taxAndDeliveryDataResp : any = [{ keys: ["Name", "Tax Slabe", "Actions"] }, { values: [{_id: 1, name: "Grocery", value: "20%"},{ name: "Food", value: "15%"}] }, { actions: ["edit", "delete"] }]
  cmsDataResp : any = [{ keys: ["Name", "Body", "Actions"] }, { values: [{ _id:1, name: "About Us", value: "<h1>About Us</h1>We are using namashkar<p></p>"}] }, { actions: ["edit", "delete"] }]
  pincodeDataResp : any = [{ keys: ["Name", "Pincode", "Actions"] }, { values: [{ _id:1, name: "Baghbazar", value: "700029"}] }, { actions: ["edit", "delete"] }]
  contactUsDataResp : any = [{ keys: ["Name", "Details", "Actions"] }, { values: [{_id:1, name: "Email", value: "namashkar@gmail.com"}] }, { actions: ["edit", "delete"] }]
  socialLinkDataResp : any = [{ keys: ["Name", "Links", "Actions"] }, { values: [{ _id:1, name: "Facebook", value: "http://localhost:3000"}] }, { actions: ["edit", "delete"] }]
  sliderDataResp = [{ keys: [ "Name", "Banner Posititon", "Actions"] }, { values: [{_id:1, name: "Banner 1", value: "Header"}] }, { actions: ["edit", "delete"] }]
  constructor() { }
}
