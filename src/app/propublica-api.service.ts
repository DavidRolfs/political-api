import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { apiKey } from './api-keys';

@Injectable()
export class PropublicaApiService {

  constructor(private http: Http) { }


  GetAllSenators(){
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json',
      { headers: headers });
  }

  // GetAllBills(){
  //   let headers = new Headers();
  //   headers.append('X-API-Key', 'PROPUBLICA_API_KEY');
  //   this.http.get('https://api.propublica.org/congress/v1/115/both/bills/introduced.json',
  //     { headers: headers }
  //   ).subscribe(response => {
  //     console.log(response.json());
  //   });
  // }
  //
  // GetAllCommittees(){
  //   let headers = new Headers();
  //   headers.append('X-API-Key', 'PROPUBLICA_API_KEY');
  //   this.http.get('https://api.propublica.org/joint/v1/115/committees.json',
  //     { headers: headers }
  //   ).subscribe(response => {
  //     console.log(response.json());
  //   });
  // }
}
