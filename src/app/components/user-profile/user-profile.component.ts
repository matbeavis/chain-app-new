import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { LocalStorageService } from '../../service/localstorage.service';
import { Profile } from '../../interfaces/profile';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	constructor(
		private localStorageService: LocalStorageService,
		private navigationService: NavigationService
	) {}

	photoUrl: string = '';
	profiles: Profile[] = [];
	email: string = '';
	photos: string[] = []; // Array para armazenar as URLs das fotos
	userDescription: string = '';
	userAge: number = 18;
	userDistance: number = 1;

	ngOnInit() {
		this.email = this.localStorageService.getItem('loggedUser');
		this.profiles = this.localStorageService.getItem('profiles');
		if (!this.profiles) this.profiles = [];
		const profile = this.profiles.find((profile: Profile) => this.email === profile.email);
		if (profile != null) {
			this.photos = profile.photos;
			this.userDescription = profile.description;
			this.userAge = profile.age;
			this.userDistance = profile.distance;
		}
	}

	uploadPhoto() {
		const imageUrl = this.photoUrl;
		try {
			new URL(imageUrl);
		} catch (_) {
			alert('URL inválida');
			return;
		}
		this.photos.push(imageUrl);
	}

	submit() {
		const profile: Profile = {
			email: this.email,
			photos: this.photos,
			description: this.userDescription,
			age: this.userAge,
			distance: this.userDistance
		};
		const index = this.profiles.findIndex((profile: Profile) => profile.email === this.email);
		if (index === -1) {
			this.profiles.push(profile);
		} else {
			this.profiles[index] = profile;
		}
		this.localStorageService.setItem('profiles', this.profiles);
		alert('Perfil atualizado com sucesso');
	}

	back() {
		this.navigationService.goToHome();
	}

	deletePhotos() {
		this.photos = [];
	}
}
