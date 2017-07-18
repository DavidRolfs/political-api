import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LegislatorInfoComponent } from './legislator-info/legislator-info.component';
import { CommitteeInfoComponent } from './committee-info/committee-info.component';
import { BillInfoComponent } from './bill-info/bill-info.component';
import { Headers } from '@angular/http';
import { BillListComponent } from './bill-list/bill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LegislatorInfoComponent,
    CommitteeInfoComponent,
    BillInfoComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
