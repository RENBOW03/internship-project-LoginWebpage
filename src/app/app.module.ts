import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';
import { NotuserComponent } from './notuser/notuser.component';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes = [
  { path: '' ,component: LoginComponent },
  { path: 'user' ,component: UserComponent},
  { path: 'login' ,component: LoginComponent},
  { path: 'register',component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NotuserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
