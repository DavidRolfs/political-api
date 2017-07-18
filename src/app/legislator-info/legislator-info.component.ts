import { Component } from '@angular/core';
import { PropublicaApiService } from '../propublica-api.service';
import { Legislator } from '../legislator.model';

@Component({
  selector: 'app-legislator-info',
  templateUrl: './legislator-info.component.html',
  styleUrls: ['./legislator-info.component.css'],
  providers: [PropublicaApiService]
})
export class LegislatorInfoComponent {
    senators: Legislator[];


  constructor(private senatorsApiCall: PropublicaApiService) { }

    GetSenatorList(){
      this.senatorsApiCall.GetAllSenators().subscribe(response =>{
        this.senators = response.json().results[0].members;
      });
    }

  }
