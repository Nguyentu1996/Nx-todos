import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellFeatureModule } from '@todos-app/web/shell/feature';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, WebShellFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
