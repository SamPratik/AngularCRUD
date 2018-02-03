import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface IItems {
  id: number,
  title: string,
  description: string
}

@Injectable()
export class ReadItemsService {
  constructor(private _http: HttpClient) { }

  getItems(): Observable<IItems[]> {
    return this._http.get<IItems[]>('http://localhost/AngularCRUD/src/assets/data/items.php');
  }
}
