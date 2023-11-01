import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  photos: string[] = []; // Array para armazenar as URLs das fotos
  userDescription: string = '';
  userAge: number = 18;
  userDistance: number = 1;

  uploadPhoto(event: any) {
    // lógica para fazer o upload de uma foto e adicioná-la ao array photos
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.photos.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}
