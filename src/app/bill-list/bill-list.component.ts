import { Component } from '@angular/core';
import { PropublicaApiService } from '../propublica-api.service';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
  providers: [PropublicaApiService]
})
export class BillListComponent {
  bills: Bill[];

  constructor(private billApiCall: PropublicaApiService) { }

  GetBills(){
    this.billApiCall.GetAllBills().subscribe(response =>{
      this.bills = response.json().results[0].bills;
    });
  }

}
