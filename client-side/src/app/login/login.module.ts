import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginUserComponent, UserManagementComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[LoginUserComponent,UserManagementComponent]
})
export class LoginModule { }
