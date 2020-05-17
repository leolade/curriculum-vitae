import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CurriculumVitaeRoutes} from './curriculum-vitae.routes';
import {SharedModule} from '../shared/shared.module';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';


@NgModule({
  declarations: [
    CurriculumVitaeComponent
  ],
  imports: [
    RouterModule.forChild(CurriculumVitaeRoutes.routes),
    CommonModule,
    SharedModule
  ],
})
export class CurriculumVitaeModule {
}
