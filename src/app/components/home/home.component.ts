import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isLogin:boolean = true;
  switchMode() {
    this.isLogin = !this.isLogin;
  }

  getLabel() {
    return this.isLogin ? 'Registrati' : 'Accedi';
  }

}
