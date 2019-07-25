
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterExternalComponent } from './register-external/register-external.component';
import { LoginExternalComponent } from './login/login-external/login-external.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthenticationService } from './shared/services/authentication.service';
import { LoginGuard } from './shared/guards/login.guard';
import {AuthGuard} from './shared/guards/auth.guard';
import { ProfessorGuard } from './shared/guards/professor.guard';
import { AdminExternalComponent } from './admin/admin-external/admin-external.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
 import { CreateUserComponent } from './admin/admin-user/create-user/create-user.component';
import { CreateUniversityComponent } from './admin/create-university/create-university.component';
import { AdminUniversityComponent } from './admin/admin-university/admin-university.component';
import { ThesisDetailsComponent } from './thesis/thesis-details/thesis-details.component';
import { ThesisProfessorComponent } from './thesis/thesis-professor/thesis-professor.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorThesisComponent } from './professor/professor-thesis/professor-thesis.component';
import { ProfessorRequestsComponent } from './professor/professor-requests/professor-requests.component';
import { ProfessorPendingComponent } from './professor/professor-pending/professor-pending.component';
import { ProfessorAssignedComponent } from './professor/professor-assigned/professor-assigned.component';
import { ProfessorThesisEditComponent } from './professor/professor-thesis-edit/professor-thesis-edit.component';
import { ThesisCreateComponent } from './thesis/thesis-create/thesis-create.component';
import { AdminActivateExternalsComponent } from './admin/admin-activate-externals/admin-activate-externals.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login' , component: LoginComponent , canActivate: [LoginGuard] },
  { path: 'login-external', component: LoginExternalComponent, canActivate: [LoginGuard] },
  { path: 'register-external', component: RegisterExternalComponent , canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
  { path:'thesis_details/:id' , component:ThesisDetailsComponent , pathMatch:'full' },
  { path:'thesis_professor/:id' , component:ThesisProfessorComponent , pathMatch:'full' },
  { path:'thesis_create' , component:ThesisCreateComponent , pathMatch:'full' },
  { path: 'admin', component: AdminComponent , canActivate: [AdminGuard] , 
      children :[ 
        { path:'external' , component:AdminExternalComponent , pathMatch:'full'},
        { path:'external_activate', component:AdminActivateExternalsComponent , pathMatch:'full'},
        { path:'user' , component:AdminUserComponent , pathMatch:'full' },
        { path:'user_create' , component:CreateUserComponent , pathMatch:'full' },
        { path:'university_create' , component:CreateUniversityComponent , pathMatch:'full' },
        { path:'university' , component:AdminUniversityComponent , pathMatch:'full' },
      ] 
  },
  { path: 'professor', component: ProfessorComponent , canActivate: [ProfessorGuard],
    children :[ 
      { path:'requests' , component:ProfessorRequestsComponent , pathMatch:'full'},
      { path:'assigned', component:ProfessorAssignedComponent , pathMatch:'full'},
      { path:'pending' , component:ProfessorPendingComponent , pathMatch:'full' },
      { path:'thesis' , component:ProfessorThesisComponent , pathMatch:'full' },
      { path:'thesis_edit/:id' , component:ProfessorThesisEditComponent , pathMatch:'full' }

    ] 
  }, 

 



  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
