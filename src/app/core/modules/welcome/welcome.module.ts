import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent],
  imports: [SharedModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
