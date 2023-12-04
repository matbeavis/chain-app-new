import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { LocalStorageService } from '../../service/localstorage.service';
import { NavigationService } from '../../service/navigation.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	email: string = '';
	password: string = '';
	users: User[] = [];

	ngOnInit() {
		this.users = this.localStorageService.getItem('users');
	}

	login() {
		const existingUser = this.users.find((user: User) => {
			return user.email === this.email && user.password === this.password;
		});
		if (!existingUser) {
			alert('Email ou senha incorreto');
			return;
		}
		this.localStorageService.setItem('loggedUser', this.email);
		this.navigationService.goToHome();
	}
}
