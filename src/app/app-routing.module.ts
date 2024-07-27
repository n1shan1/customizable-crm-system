import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LeadsDashComponent } from './pages/leads-dash/leads-dash.component';
import { PipelineDashComponent } from './pages/pipeline-dash/pipeline-dash.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { log } from 'console';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leads', component: LeadsDashComponent },
  { path: 'pipeline', component: PipelineDashComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '*', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
