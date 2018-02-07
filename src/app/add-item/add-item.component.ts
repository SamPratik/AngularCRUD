import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IItems } from '../interfaces/items';
import { ItemsService } from '../services/items.service';
import { ItemsArrayService } from '../services/items-array.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
 items: IItems[] = [];
  //Taking 'items' as input from parent component(DashboardComponent)...
  // @Input() items: any[];
  constructor(private itemsService: ItemsService, private itemsData: ItemsArrayService) { }
  userForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });
  ngOnInit() {
    this.itemsData.currentItems.subscribe(res => this.items = res);
  }

  onSubmit() {
    this.itemsService.insertItem(this.userForm.value)
    .subscribe(res => {
      // After inserting form values get the last inserted id to show dynamically in the
      // view...
      this.itemsService.getLastId()
      .subscribe(res => {
        this.userForm.value.id = res;
        $('#addItemForm')[0].reset();
      });
      // Add the form data(title, description) as well as the last inserted id
      // in the items array usin unshift( method)...
      this.items.unshift(this.userForm.value);

      // calling the changeItems() function of items-array service with items
      // array which contains the newly inserted item and it will change all
      // items array of the components...
      this.itemsData.changeItem(this.items);
      console.log(res);
    });
  }

}
