import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

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
