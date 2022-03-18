import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './web-shell-router.module';
import { LayoutModule } from '@todos-app/web/shell/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule, 
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})
  ],
  exports: [
    RouterModule
  ]
})
export class WebShellFeatureModule {}
