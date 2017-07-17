import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LegislatorInfoComponent } from './legislator-info/legislator-info.component';
import { CommitteeInfoComponent } from './committee-info/committee-info.component';
import { BillInfoComponent } from './bill-info/bill-info.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { Headers } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegislatorInfoComponent,
    CommitteeInfoComponent,
    BillInfoComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Headers],
  bootstrap: [AppComponent]
})
export class AppModule { }
