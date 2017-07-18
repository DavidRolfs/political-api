import { Injectable } from '@angular/core';
import { Bill } from './bill.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BillSaveService {
  savedBills: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) {
    this.savedBills = af.list('bills');
   }
   addBill(newBill: Bill){
     this.savedBills.push(newBill);
   }
   getBills() {
     return this.savedBills;
   }

}
