import { Component, OnInit } from '@angular/core';

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
  items: Array<IItems>;
  constructor() { }

  ngOnInit() {
    this.items = [
      {id: 1, title: 'This is a title', description: 'This is a desctiption'},
      {id: 2, title: 'This is a title', description: 'This is a desctiption'},
      {id: 3, title: 'This is a title', description: 'This is a desctiption'},
      {id: 4, title: 'This is a title', description: 'This is a desctiption'},
      {id: 5, title: 'This is a title', description: 'This is a desctiption'},
      {id: 6, title: 'This is a title', description: 'This is a desctiption'},
      {id: 7, title: 'This is a title', description: 'This is a desctiption'},
    ]
  }

}
