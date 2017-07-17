import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PropublicaApiService } from '../propublica-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  provider: [PropublicaApiService]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
