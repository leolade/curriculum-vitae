import {Routes} from '@angular/router';
import {PersonneResolverService} from '../shared/resolvers/personne-resolver.service';
import {FalseResolverService} from '../shared/resolvers/false-resolver.service';
import {TrueResolverService} from '../shared/resolvers/true-resolver.service';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';
import {CurriculumVitaeStaticComponent} from './components/curriculum-vitae-static/curriculum-vitae-static.component';

export class CurriculumVitaeRoutes {
  static routes: Routes = [
    {
      path: 'static',
      component: CurriculumVitaeStaticComponent,
      resolve: {
        personne: PersonneResolverService,
        staticMode: TrueResolverService,
      },
    },
    {
      path: '',
      component: CurriculumVitaeComponent,
      resolve: {
        personne: PersonneResolverService,
        staticMode: FalseResolverService,
      },
    },
  ];
}
