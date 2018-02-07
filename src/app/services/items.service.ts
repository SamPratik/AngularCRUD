import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface IItems {
  id: number,
  title: string,
  description: string
}

@Injectable()
export class ItemsService {
  constructor(private _http: HttpClient) { }

  getItems(): Observable<IItems[]> {
    return this._http.get<IItems[]>('http://localhost/AngularCRUD/src/assets/data/items.php');
  }

  insertItem(info) {
    return this._http.post('http://localhost/AngularCRUD/src/assets/data/insertItem.php', info);
  }

  getLastId(): Observable<number> {
    return this._http.get<number>('http://localhost/AngularCRUD/src/assets/data/getLastItemId.php');
  }

  getItemUsingId(itemId): Observable<IItems> {
    // let params = new HttpParams();
    // params.append('id', itemId)
    return this._http.get<IItems>(`http://localhost/AngularCRUD/src/assets/data/getItemUsingId.php?id=${itemId}`);
  }

  updateItem(editedValue) {
    return this._http.post('http://localhost/angularCRUD/src/assets/data/editItem.php', editedValue);
  }

  deleteItem(itemId): Observable<number> {
    return this._http.get<number>(`http://localhost/angularCRUD/src/assets/data/deleteItem.php?id=${itemId}`);
  }

  searchItem(value): Observable<IItems[]> {
    return this._http.get<IItems[]>(`http://localhost/angularCRUD/src/assets/data/searchItem.php?searchParam=${value}`);
  }
}
