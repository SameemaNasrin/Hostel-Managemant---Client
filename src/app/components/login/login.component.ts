import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  errorMsgs = []
  email: string;
  password: string;
  constructor() { }

  ngOnInit () {
  }
  doLogin (): void {

  }

}