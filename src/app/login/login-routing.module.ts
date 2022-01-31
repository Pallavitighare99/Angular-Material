import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loginLink'
    },
    { path: 'loginLink', component: LoginComponent },
    { path: 'registrationLink', component: RegistrationComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
