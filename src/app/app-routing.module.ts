import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { OptionsComponent } from './components/options/options.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'recovery', component: RecoveryComponent },
	{ path: 'options', component: OptionsComponent },
	{ path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
