import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {
	constructor(private router: Router) {}

	goToLogin() {
		this.router.navigate(['/login']);
	}

	goToHome() {
		this.router.navigate(['/home']);
	}

	goToUserProfile() {
		this.router.navigate(['/user-profile']);
	}

	goToOptions() {
		this.router.navigate(['/options']);
	}

	goToRecovery() {
		this.router.navigate(['/recovery']);
	}
}
