import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document.component';

const routes: Routes = [
  {
    path:'', component: DocumentComponent
  }
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DocumentComponent],
  exports: [DocumentComponent]
})
export class DocumentComponentModule {}
