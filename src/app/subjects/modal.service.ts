import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isAddModal$ = new Subject<any>()
  constructor() { }
}
