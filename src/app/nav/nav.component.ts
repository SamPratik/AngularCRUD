import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ItemsArrayService } from '../services/items-array.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchParam: string = '';
  items: any[];
  constructor(private itemsService: ItemsService, private itemsArrayService: ItemsArrayService) { }

  ngOnInit() {

  }

  searchItem() {
    // console.log(this.searchParam);
    this.itemsService.searchItem(this.searchParam)
    .subscribe(res => {
      console.log(res);
      this.itemsArrayService.changeItem(res);
    });
  }
}
