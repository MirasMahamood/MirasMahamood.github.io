import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as data from 'src/assets/data/uom.json'
import { Uom } from './uom';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  uomList: Uom[] = (data as any).default;

  constructor(private http: HttpClient) { }

  createUom(uom: Uom) {
    uom.id = "" + Math.random() * 1000;
    this.uomList.unshift(uom)
    let responseData = {
      data: uom,
    }
    return of(responseData)
  }

  deleteUom(id: string) {
    console.log(id);
    const index = this.uomList.findIndex(u => u.id == id);
    this.uomList.splice(index, 1)
    let responseData = {
      data: this.uomList
    }
    return of(responseData)
  }

  getAllUoms() {
    let responseData = {
      data: this.uomList
    }
    return of(responseData)
  }

  getUomById(id: string) {
    let uom = this.uomList.find(u => u.id === id)
    let responseData = {
      data: uom
    }
    return of(responseData)
  }

  updateUom(uom: Uom) {
    const index = this.uomList.findIndex(u => u.id === uom.id);
    this.uomList.splice(index, 1);
    this.uomList.unshift(uom);
    let responseData = {
      data: uom,
    }
    return of(responseData)
  }
}
