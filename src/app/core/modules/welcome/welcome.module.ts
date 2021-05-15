import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, RegisterComponent],
  imports: [SharedModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
