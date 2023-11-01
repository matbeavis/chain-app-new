import { Component } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent {
  email: string = '';
  codeSent: boolean = false;
  verificationCode: string = '';

  sendCode() {
    // lógica para enviar um código para o email do usuário
    // Após enviar o código, defina codeSent como true para mostrar o campo de verificação
    this.codeSent = true;
  }

  loginWithCode() {
    //lógica para verificar o código e permitir o login
  }
}
