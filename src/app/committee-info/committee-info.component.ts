import { Component } from '@angular/core';
import { PropublicaApiService } from '../propublica-api.service';
import { Committee } from '../committee.model';

@Component({
  selector: 'app-committee-info',
  templateUrl: './committee-info.component.html',
  styleUrls: ['./committee-info.component.css'],
  providers: [PropublicaApiService]
})
export class CommitteeInfoComponent {
  committees: Committee[];

  constructor(private committeeApiCall: PropublicaApiService) { }

    GetCommittee(){
      this.committeeApiCall.GetAllCommittees().subscribe(response =>{
        this.committees = response.json().results[0].committees;
      });
    }

}
