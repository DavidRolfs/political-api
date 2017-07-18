import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { apiKey } from './api-keys';
import { BillSaveService } from './bill-save.service';
import { Bill } from './bill.model'

@Injectable()
export class PropublicaApiService {

  constructor(private http: Http, private billSaveService: BillSaveService) { }


  GetAllSenators(){
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json',
      { headers: headers });
  }

  GetAllBills(){
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/house/bills/introduced.json',
      { headers: headers });
    }

  GetAllCommittees(){
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/house/committees.json',
      { headers: headers });
  }
  saveBill(title: string, committees: string, sponsor_name: string, introduced_date: string, summary: string, govtrack_url: string) {
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/house/bills/introduced.json',
      { headers: headers })
    .subscribe(response => {
      const responseAsJson = response.json();
      for(let bill of responseAsJson.results[0].bills) {
        let foundBill = new Bill(bill.title, bill.committees, bill.sponsor_name, introduced_date, summary, govtrack_url);
        this.billSaveService.addBill(foundBill);
      }
    });
  }
}
