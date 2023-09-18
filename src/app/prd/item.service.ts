import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemUnit } from './item/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements Resolve<any>{
  public itemUnitRows: ItemUnit[]=[];
  public onUserListChanged: BehaviorSubject<any>;
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onUserListChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAllItemUnit()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getAllItemUnit(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}/api/ItemUnits/GetAll`)
      .subscribe((response: any) => {
        this.itemUnitRows = response.DataList;
        this.onUserListChanged.next(this.itemUnitRows);
        console.log(this.itemUnitRows);
        console.log(this.onUserListChanged);
        resolve(this.itemUnitRows);
      }, reject);
    });
  }

  
}

 
