import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  userGender: string = '';
  otherUsersGender: string = '';
  yourPreferences: any = {
    attribute1: false,
    // atributos de preferências
  };
  otherUsersPreferences: any = {
    attribute1: false,
    // atributos de preferências 
  };

  changePassword() {
    // lógica para mudar a senha
    if (this.newPassword === this.confirmPassword) {
      // Senhas iguais, prossiga com a mudança
    } else {
      // Senhas não coincidem, mostre uma mensagem de erro
    }
  }
}
