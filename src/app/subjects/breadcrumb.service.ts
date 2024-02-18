import { Injectable } from '@angular/core';
import { Subject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  links$ = new Subject<any>()
  constructor() { }
}
