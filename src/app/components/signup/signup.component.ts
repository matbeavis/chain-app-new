import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/localstorage.service';
import { User } from '../../interfaces/user';
import { NavigationService } from '../../service/navigation.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	name: string = '';
	email: string = '';
	password: string = '';
	birthdate: string = '';
	selectedGender: string = 'Masculino';
	selectedPreference: string = 'Masculino';
	users: User[] = [];

	ngOnInit() {
		this.users = this.localStorageService.getItem('users');
	}

	signup() {
		this.localStorageService.removeItem('users');
		if (this.users == null) this.users = [];
		const existingUser = this.users.find((user: User) => {
			return user.email === this.email;
		});
		if (existingUser) {
			alert('Email já cadastrado');
			return;
		}
		this.users.push({
			name: this.name,
			email: this.email,
			password: this.password,
			birthdate: this.birthdate,
			selectedGender: this.selectedGender,
			selectedPreference: this.selectedPreference
		});
		this.localStorageService.setItem('users', this.users);
		alert('Usuário cadastrado com sucesso');
		return;
	}

	login() {
		this.navigationService.goToLogin();
	}
}
