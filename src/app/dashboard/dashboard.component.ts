import { Component, OnInit } from '@angular/core';
import { ItemsArrayService } from '../services/items-array.service';
import { ItemsService } from '../services/items.service';
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
    public itemsService: ItemsService,
    private _http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private itemsData: ItemsArrayService
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

    // calling this getData() function to change the items value of items-array
    // service so that every component which has registered with itemsSource,
    // gets this items value...
    this.itemsData.getData();

    // getting the current changed items value from items-array service...
    this.itemsData.currentItems.subscribe(res => this.items = res);
  }

  // takes to the edit page with the URL parameter of the id of selected item...
  onSelectEditBtn(itemId) {
    this.router.navigate(['.', itemId], {relativeTo: this.route});
  }

  // deleting a item dynamically whith a confimation alert...
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
