import { Component, OnInit } from '@angular/core';
import { ReadItemsService } from '../services/read-items.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    public itemsService: ReadItemsService,
    private _http: HttpClient,
    private router: Router
  ) { }

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

  onSelectEditBtn(itemId) {
    this.router.navigate(['/items', itemId]);
  }

  deleteItem(event, itemId) {
    var c = confirm('Are you sure, you want to delete this?');
    if(c) {
      console.log('You pressed ok!');
      this.itemsService.deleteItem(itemId)
      .subscribe(res => {
        console.log(res);
        event.target.parentElement.parentElement.style.display='none';
      });
    } else {
      console.log('You pressed cancel!');
    }
  }

}
