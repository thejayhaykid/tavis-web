import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './components/home/home.component';
import { SyncManagerComponent } from './components/sync-manager/sync-manager.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BcmAdminComponent } from './components/bcm-admin/bcm-admin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RandomGamesDialog } from './dialogs/random-games/random-games-dialog';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContestsComponent } from './components/contests/contests.component';
import { ClickOutsideDirective } from './directives/clickOutside/click-outside.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { BetterCompletionsMatterComponent } from './components/contests/better-completions-matter/landing/better-completions-matter.component';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { BcmPlayerComponent } from './components/contests/better-completions-matter/bcm-player/bcm-player.component';
import { BcmLeaderboardComponent } from './components/contests/better-completions-matter/bcm-leaderboard/bcm-leaderboard.component';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SyncManagerComponent,
    BcmAdminComponent,
    RandomGamesDialog,
    PageNotFoundComponent,
    ContestsComponent,
    ClickOutsideDirective,
    ProfileComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    BetterCompletionsMatterComponent,
    OrdinalPipe,
    BcmPlayerComponent,
    BcmLeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.api.domain],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
