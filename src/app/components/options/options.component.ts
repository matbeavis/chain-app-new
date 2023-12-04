import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/localstorage.service';
import { NavigationService } from '../../service/navigation.service';
import { User } from '../../interfaces/user';

@Component({
	selector: 'app-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	user!: User;
	users: User[] = [];
	email: string = '';
	newPassword: string = '';
	confirmPassword: string = '';

	ngOnInit() {
		this.email = this.localStorageService.getItem('loggedUser');
		this.users = this.localStorageService.getItem('users');
		const user = this.users.find((user: User) => user.email === this.email);
		if (user != null) {
			this.user = user;
		}
	}

	changePassword() {
		if (this.newPassword === this.confirmPassword) {
			this.user.password = this.newPassword;
			const index = this.users.findIndex((user: User) => user.email === this.email);
			if (index === -1) {
				this.users.push(this.user);
			} else {
				this.users[index] = this.user;
			}
			this.localStorageService.setItem('users', this.users);
			alert('Senha alterada com sucesso');
		} else {
			alert('Senhas não conferem');
		}
	}

	back() {
		this.navigationService.goToHome();
	}
}
