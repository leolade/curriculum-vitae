import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import { ExperienceComponent } from '../experience/experience.component';
import { LabelWithIconComponent } from '../label-with-icon/label-with-icon.component';
import {CurriculumVitaeRoutes} from './curriculum-vitae.routes';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from "../card/card.component";


@NgModule({
    declarations: [
        CurriculumVitaeComponent
    ],
  imports: [
    RouterModule.forChild(CurriculumVitaeRoutes.routes),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CardComponent,
    LabelWithIconComponent,
    ExperienceComponent,
  ],
})
export class CurriculumVitaeModule {
}
