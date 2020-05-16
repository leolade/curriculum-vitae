import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CurriculumVitaeRoutes} from './curriculum-vitae.routes';
import {SharedModule} from '../shared/shared.module';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';
import {CurriculumVitaeStaticComponent} from './components/curriculum-vitae-static/curriculum-vitae-static.component';


@NgModule({
  declarations: [
    CurriculumVitaeComponent,
    CurriculumVitaeStaticComponent
  ],
  imports: [
    RouterModule.forChild(CurriculumVitaeRoutes.routes),
    CommonModule,
    SharedModule
  ],
})
export class CurriculumVitaeModule {
}
