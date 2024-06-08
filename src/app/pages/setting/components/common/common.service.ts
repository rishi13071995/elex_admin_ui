import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  taxAndDeliveryDataResp : any = [{ keys: ["Name", "Tax Slabe", "Actions"] }, { values: [{_id: 1, name: "Grocery", value: "20%"},{ name: "Food", value: "15%"}] }, { actions: ["edit", "delete"] }]
  taxAndDeliveryAttributes: any = { titleName: "Add Tax & Delivery Charges",  keys: ["Name", "Tax Slabe"], keysName: {Name: "name", "Tax Slabe": "value"}, keysValue: {}, keyTypes: { Name: "text", "Tax Slabe": "text" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }


  cmsDataResp : any = [{ keys: ["Name", "Body", "Actions"] }, { values: [{ _id:1, name: "About Us", value: "<h1>About Us</h1>We are using namashkar<p></p>"}] }, { actions: ["edit", "delete"] }]
  cmsAttributes: any = { titleName: "Add CMS",  keys: ["Name", "Body"], keysName: {Name: "name", "Body": "value"}, keysValue: {}, keyTypes: { Name: "text", "Body": "text" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }

  pincodeDataResp : any = [{ keys: ["Name", "Pincode", "Actions"] }, { values: [{ _id:1, name: "Baghbazar", value: "700029"}] }, { actions: ["edit", "delete"] }]
  pincodeAttributes: any = { titleName: "Add Pincode",  keys: ["Name", "Pincode"], keysName: {Name: "name", "Pincode": "value"}, keysValue: {}, keyTypes: { Name: "text", "Pincode": "number" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }

  contactUsDataResp : any = [{ keys: ["Name", "Details", "Actions"] }, { values: [{_id:1, name: "Email", value: "namashkar@gmail.com"}] }, { actions: ["edit", "delete"] }]
  contactAttributes: any = { titleName: "Add Contact Details",  keys: ["Name", "Details"], keysName: {Name: "name", "Details": "value"}, keysValue: {}, keyTypes: { Name: "text", "Details": "text" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }

  socialLinkDataResp : any = [{ keys: ["Name", "Links", "Actions"] }, { values: [{ _id:1, name: "Facebook", value: "http://localhost:3000"}] }, { actions: ["edit", "delete"] }]
  sliderDataResp = [{ keys: [ "Name", "Banner Posititon", "Actions"] }, { values: [{_id:1, name: "Banner 1", value: "Header"}] }, { actions: ["edit", "delete"] }]
  socialLinkAttributes: any = { titleName: "Add Social Links",  keys: ["Name", "Links"], keysName: {Name: "name", "Links": "value"}, keysValue: {}, keyTypes: { Name: "text", "Links": "text" },dropdowns :  { keys: ["Admin", "Normal"], value: [{ Admin: "admin", Normal: "normal" }] } }

  constructor() { }
}
