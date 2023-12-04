import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	setItem(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getItem(key: string): any {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}

	removeItem(key: string) {
		localStorage.removeItem(key);
	}
}
