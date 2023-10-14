import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BcmAdminComponent } from './components/admin/bcm-admin.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PlayerComponent } from './components/player/player.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SyncManagerComponent } from './components/sync-manager/sync-manager.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  {
    path: 'player/:id',
    component: PlayerComponent,
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sync', component: SyncManagerComponent, canActivate: [AuthGuard] },
  { path: 'bcm-admin', component: BcmAdminComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
