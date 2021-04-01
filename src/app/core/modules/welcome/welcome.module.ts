import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { AuthComponent } from './auth/auth.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent, AuthComponent, OverviewComponent],
  imports: [SharedModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
