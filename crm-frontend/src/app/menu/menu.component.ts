import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { DEFAULT_USERNAME } from '../app.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false
  defaultUsername = DEFAULT_USERNAME;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
      // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn()
  }

}
