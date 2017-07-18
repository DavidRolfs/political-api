import { Component, OnInit, Input } from '@angular/core';
import { BillSaveService } from '../bill-save.service';
import { Bill } from '../bill.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PropublicaApiService } from '../propublica-api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ BillSaveService, PropublicaApiService ]
})
export class UserListComponent implements OnInit {
  @Input() childBills;
  constructor(private billSaveService: BillSaveService) { }
    savedBills: FirebaseListObservable <any[]> = null;

  ngOnInit() {
    this.savedBills = this.billSaveService.getBills();
  }

}
