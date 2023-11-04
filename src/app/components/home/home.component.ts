import { Component } from '@angular/core';

interface Profile {
	id: number;
	images: string[]; // Um array com as URLs das imagens do perfil
	description: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	profiles: Profile[] = [
		{
			id: 1,
			images: ['url1', 'url2', 'url3'], // URLs das imagens
			description: 'Descrição do perfil 1. Até 300 caracteres.'
		}
	];

	likeProfile(profile: Profile) {
		// aceitar o perfil e ir para a tela de chat
		console.log('Perfil aceito:', profile);
	}

	rejectProfile(profile: Profile) {
		// rejeitar o perfil e mostrar o próximo
		console.log('Perfil rejeitado:', profile);
	}

	goToProfile() {
		// redirecionar para o perfil do usuário
		console.log('Ir para o perfil do usuário');
	}

	goToSettings() {
		// redirecionar para as configurações gerais
		console.log('Ir para as configurações gerais');
	}
}
