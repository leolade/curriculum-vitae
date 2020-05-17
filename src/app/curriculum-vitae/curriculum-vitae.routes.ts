import {Routes} from '@angular/router';
import {PersonneResolverService} from '../shared/resolvers/personne-resolver.service';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';

export class CurriculumVitaeRoutes {
  static routes: Routes = [
    {
      path: '',
      component: CurriculumVitaeComponent,
      resolve: {
        personne: PersonneResolverService,
      },
    },
  ];
}
