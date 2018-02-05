import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadItemsService } from '../services/read-items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  inputs: ['items']
})
export class AddItemComponent implements OnInit {
  items: any[];
  constructor(private itemsService: ReadItemsService) { }
  userForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });
  ngOnInit() {
  }

  onSubmit() {
    this.itemsService.insertItem(this.userForm.value)
    .subscribe(res => {
      // After inserting form values get the last inserted id to show dynamically in the
      // view...
      this.itemsService.getLastId()
      .subscribe(res => this.userForm.value.id = res);
      // Add the form data(title, description) as well as the last inserted id
      // in the items array usin unshift( method)...
      this.items.unshift(this.userForm.value);
      console.log(res);
    });
  }

}
