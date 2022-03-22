import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { WebShellUiNavModule } from '@todos-app/web/shell/ui/nav';
import { MainComponentModule } from '@todos-app/web/shell/ui/main';


@NgModule({
  imports: [CommonModule, WebShellUiNavModule, MainComponentModule, RouterModule],
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
