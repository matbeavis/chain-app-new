import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/localstorage.service';
import { User } from '../../interfaces/user';
import { NavigationService } from '../../service/navigation.service';

@Component({
	selector: 'app-recovery',
	templateUrl: './recovery.component.html',
	styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	email: string = '';
	codeSent: boolean = false;
	verificationCode: string = '';
	users: User[] = [];

	ngOnInit() {
		this.users = this.localStorageService.getItem('users');
	}

	sendCode() {
		const existingUser = this.users.find((user: User) => {
			return user.email === this.email;
		});
		if (!existingUser) {
			alert('Email não cadastrado');
			return;
		}
		alert('Seu código é 123');
		this.codeSent = true;
	}

	loginWithCode() {
		if (this.verificationCode !== '123') {
			alert('Código incorreto');
			return;
		}
		this.localStorageService.setItem('loggedUser', this.email);
		alert('Login realizado com sucesso');
		this.navigationService.goToHome();
	}
}
