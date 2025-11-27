import { Component, OnInit } from '@angular/core';
import { SUPPORT_EMAIL } from '../app.constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = `An error occurred! Contact support at: ${SUPPORT_EMAIL}`

  constructor() { }

  ngOnInit() {
  }

}
