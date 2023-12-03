import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { OptionsComponent } from './components/options/options.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		SignupComponent,
		HomeComponent,
		RecoveryComponent,
		OptionsComponent,
		UserProfileComponent
	],
	imports: [BrowserModule, FormsModule, BrowserAnimationsModule, RouterModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
