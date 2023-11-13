import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(){
    if (this.email == '') {
      alert('Coloca o email ai parceiro');
      return;
    }

    if (this.password == '') {
      alert('Coloca a senha ai parceiro');
      return;
    }

    this.auth.login(this.email ,this.password);
    this.email = '';
    this.password = '';
  }

  cancel(){
    this.email = '';
    this.password = '';
  }
}
