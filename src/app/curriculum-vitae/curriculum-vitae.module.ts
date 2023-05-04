import {NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CurriculumVitaeRoutes} from './curriculum-vitae.routes';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CurriculumVitaeComponent
  ],
  imports: [
    RouterModule.forChild(CurriculumVitaeRoutes.routes),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class CurriculumVitaeModule {
}
