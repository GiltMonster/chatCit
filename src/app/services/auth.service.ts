import { ParseSourceFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    console.log("oba.service");

   }

  /**
   * Método de login, recebe os parâmetros :
   * @param {string} email : string
   * @param {string} password : string
   *
   * @memberof AuthService faz a utilização a biblioteca do 'angular/fire' para fazer o processo do login.
   */
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(
        (res) => {
          localStorage.setItem('loged', 'true');
          console.log(`response:`, res);
          this.router.navigate(['/home']);
        },
        err => {
          console.log(`alguma coisa deu errado parceiro: ${err}`);
          this.router.navigate(['/login']);
        })
  }

 /**
  * Registra o usuário via email e senha
  *
  * @param {string} email :string
  * @param {string} password :string
  * @memberof AuthService
  */
 register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          alert('registro feito com sucesso!!');
          this.router.navigate(['/login']);
        },
        (err) => {
          this.router.navigate(['/singIn'])
          console.log(`Algo de errado ao cadastrar sua conta!!! informe o erro para o adm: ${err}`);

        }
      )
  }

  /**
   *  Desloga a conta.
   * @memberof AuthService
   */
  logout() {
    this.fireAuth.signOut()
      .then(
        () => {
          localStorage.removeItem('loged');
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(`Nao foi possível deslogar da sua conta, informe o adm com o seguinte erro: ${err}`);
        }
      )
  }
}
