import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

interface IItems {
  id: number,
  title: string,
  description: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
