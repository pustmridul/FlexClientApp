import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { AuthForgotPasswordV1Component } from 'app/main/pages/authentication/auth-forgot-password-v1/auth-forgot-password-v1.component';
import { AuthForgotPasswordV2Component } from 'app/main/pages/authentication/auth-forgot-password-v2/auth-forgot-password-v2.component';


import { AuthRegisterV1Component } from 'app/main/pages/authentication/auth-register-v1/auth-register-v1.component';
import { AuthRegisterV2Component } from 'app/main/pages/authentication/auth-register-v2/auth-register-v2.component';

import { AuthResetPasswordV1Component } from 'app/main/pages/authentication/auth-reset-password-v1/auth-reset-password-v1.component';
import { AuthResetPasswordV2Component } from 'app/main/pages/authentication/auth-reset-password-v2/auth-reset-password-v2.component';

// routing
const routes: Routes = [
  {
    path: 'authentication/register-v1',
    component: AuthRegisterV1Component
  },
  {
    path: 'authentication/register-v2',
    component: AuthRegisterV2Component
  },
  {
    path: 'authentication/reset-password-v1',
    component: AuthResetPasswordV1Component
  },
  {
    path: 'authentication/reset-password-v2',
    component: AuthResetPasswordV2Component
  },
  {
    path: 'authentication/forgot-password-v1',
    component: AuthForgotPasswordV1Component
  },
  {
    path: 'authentication/forgot-password-v2',
    component: AuthForgotPasswordV2Component
  }
];

@NgModule({
  declarations: [
    AuthRegisterV1Component,
    AuthRegisterV2Component,
    AuthForgotPasswordV1Component,
    AuthForgotPasswordV2Component,
    AuthResetPasswordV1Component,
    AuthResetPasswordV2Component
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule]
})
export class AuthenticationModule {}
