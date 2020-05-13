import {StaticCurriculumVitaeComponent} from './static-curriculum-vitae.component';
import {Routes} from '@angular/router';
import {PersonneResolverService} from '../shared/resolvers/personne-resolver.service';
import {FalseResolverService} from '../shared/resolvers/false-resolver.service';
import {TrueResolverService} from '../shared/resolvers/true-resolver.service';

export class StaticCurriculumVitaeRoutes {
  static routes: Routes = [
    {
      path: '',
      component: StaticCurriculumVitaeComponent,
      resolve: {
        personne: PersonneResolverService,
        printMode: FalseResolverService,
      },
    },
    {
      path: 'printable',
      component: StaticCurriculumVitaeComponent,
      resolve: {
        personne: PersonneResolverService,
        printMode: TrueResolverService,
      },
    },
  ];
}
