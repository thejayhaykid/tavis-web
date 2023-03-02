import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BcmPlayer } from 'src/models/bcm-player';
import { BcmAdminComponent } from './components/bcm-admin/bcm-admin.component';
import { BcmLeaderboardComponent } from './components/contests/better-completions-matter/bcm-leaderboard/bcm-leaderboard.component';
import { BcmPlayerComponent } from './components/contests/better-completions-matter/bcm-player/bcm-player.component';
import { BetterCompletionsMatterComponent } from './components/contests/better-completions-matter/landing/better-completions-matter.component';
import { ContestsComponent } from './components/contests/contests.component';
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
  { path: 'contests', component: ContestsComponent },
    { path: 'contests/better-completions-matter', component: BetterCompletionsMatterComponent },
      { path: 'contests/better-completions-matter/player/:id', component: BcmPlayerComponent },
      { path: 'contests/better-completions-matter/leaderboard', component: BcmLeaderboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'sync', component: SyncManagerComponent, canActivate: [AuthGuard] },
  { path: 'bcm-admin', component: BcmAdminComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
