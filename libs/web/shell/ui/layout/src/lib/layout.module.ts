import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { WebShellUiNavModule } from '@todos-app/web/shell/ui/nav';

@NgModule({
  imports: [CommonModule, WebShellUiNavModule],
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
