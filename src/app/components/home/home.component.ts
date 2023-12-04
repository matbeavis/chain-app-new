import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { LocalStorageService } from '../../service/localstorage.service';
import { Profile } from '../../interfaces/profile';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	profiles: Profile[] = [];

	ngOnInit(): void {
		const email = this.localStorageService.getItem('loggedUser');
		this.profiles = this.localStorageService.getItem('profiles');
		if (!this.profiles) this.profiles = [];
		const findIndex = this.profiles.findIndex((profile: Profile) => profile.email === email);
		if (findIndex !== -1) {
			this.profiles.splice(findIndex, 1);
		}
	}

	likeProfile() {
		alert('Perfil aceito:');
	}

	rejectProfile() {
		alert('Perfil rejeitado:');
	}

	goToProfile() {
		this.navigationService.goToUserProfile();
	}

	goToSettings() {
		this.navigationService.goToOptions();
	}

	logout() {
		this.navigationService.goToLogin();
	}
}
