import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OptionsComponent } from './components/options/options.component';
import { RecoveryComponent } from './components/recovery/recovery.component'; 
import { LoginComponent } from './components/login/login.component'; 
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão para redirecionar para a página de login
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
