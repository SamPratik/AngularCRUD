import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ReadItemsService } from '../services/read-items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  title: string = null;
  description: string = null;
  itemId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ReadItemsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.itemId = parseInt(params['id']);
      this.getPreFilledFormValues(this.itemId);
    });
  }

  getPreFilledFormValues(itemId: number) {
    this.itemsService.getItemUsingId(itemId)
    .subscribe(res => {
      this.title = res.title;
      this.description = res.description;
      console.log(res);
    });
  }

  onSubmit(value: any) {
    this.itemsService.updateItem(value)
    .subscribe(res => console.log(res));
    // console.log(value);
  }

}
