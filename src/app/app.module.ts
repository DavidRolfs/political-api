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
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserListComponent } from './user-list/user-list.component';
import { PropublicaApiService } from './propublica-api.service';
import { BillSaveService } from './bill-save.service';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LegislatorInfoComponent,
    CommitteeInfoComponent,
    BillInfoComponent,
    BillListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [BillSaveService, PropublicaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
