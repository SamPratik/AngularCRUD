import { Component, OnInit } from '@angular/core';
import { ReadItemsService } from '../services/read-items.service';
import { HttpClient } from '@angular/common/http';
interface IItems {
  id: number,
  title: string,
  description: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public items: IItems[] = [];
  constructor(public itemsService: ReadItemsService, private _http: HttpClient) { }

  ngOnInit() {
    // this.items = [
    //   {id: 1, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 2, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 3, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 4, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 5, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 6, title: 'This is a title', description: 'This is a desctiption'},
    //   {id: 7, title: 'This is a title', description: 'This is a desctiption'},
    // ]
    this.itemsService.getItems()
      .subscribe(data => this.items = data);

  }

}
