import { Component } from '@angular/core';
import { PropublicaApiService } from '../propublica-api.service';
import { Bill } from '../bill.model';
import { BillSaveService } from '../bill-save.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
  providers: [PropublicaApiService, BillSaveService]
})
export class BillListComponent {
  bills: Bill[];

  constructor(private billApiCall: PropublicaApiService) { }
  billSave(title, committees, sponsor_name, introduced_date, summary, govtrack_url){
    this.billApiCall.saveBill(title, committees, sponsor_name, introduced_date, summary, govtrack_url);
  }

  GetBills(){
    this.billApiCall.GetAllBills().subscribe(response =>{
      this.bills = response.json().results[0].bills;
    });
  }

}
