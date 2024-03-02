import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  async taxAndCharges() {
    return [{ keys: ["Name", "Tax Slabe", "Actions"] }, { values: [{ name: "Grocery", taxSlab: "20%"},{ name: "Food", taxSlab: "15%"}] }, { actions: ["edit", "delete"] }]
  }
}
