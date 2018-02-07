import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

interface IItems {
  id: number,
  title: string,
  description: string
}

@Injectable()
export class ItemsArrayService {

  public items: IItems[] = [];
  // private itemsSource = new BehaviorSubject<IItems[]>(this.items = [
  //   {id: 1, title: 'This is a title 1', description: 'this is a description 1'},
  //   {id: 2, title: 'This is a title 2', description: 'this is a description 2'},
  //   {id: 3, title: 'This is a title 3', description: 'this is a description 3'},
  //   {id: 4, title: 'This is a title 4', description: 'this is a description 4'},
  //   {id: 5, title: 'This is a title 5', description: 'this is a description 5'}
  // ]);
  private itemsSource = new BehaviorSubject<IItems[]>(this.items);
  currentItems = this.itemsSource.asObservable();

  constructor(public itemsService: ItemsService) {

  }

  getData() {
    this.itemsService.getItems()
    // loading itemsSource with items stored in database so that these items loaded in
    // every component which are subscribed to this service to populate their items
    // array...
    .subscribe(res => this.itemsSource.next(res));
  }

  // if any component wants to change items value in such a way that every other
  // components get the changed items value then that component will call this
  // changeItem(items) function...
  changeItem(items: IItems[]) {
    this.itemsSource.next(items);
  }

}
