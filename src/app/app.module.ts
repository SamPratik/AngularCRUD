import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReadItemsService } from './services/read-items.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddItemComponent,
    routingComponents,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ReadItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
