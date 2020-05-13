import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StaticCurriculumVitaeComponent} from './static-curriculum-vitae.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {StaticCurriculumVitaeRoutes} from './static-curriculum-vitae.routes';


@NgModule({
  declarations: [
    StaticCurriculumVitaeComponent
  ],
  imports: [
    RouterModule.forChild(StaticCurriculumVitaeRoutes.routes),
    CommonModule,
    SharedModule
  ],
})
export class StaticCurriculumVitaeModule {
}
