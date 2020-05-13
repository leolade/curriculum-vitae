import {Routes} from '@angular/router';

export class AppRoutes {
  static routes: Routes = [
    {
      path: 'static',
      loadChildren: () => import('./static-curriculum-vitae/static-curriculum-vitae.module').then(m => m.StaticCurriculumVitaeModule)
    },
    {
      path: '',
      redirectTo: 'static',
      pathMatch: 'full',
    },
  ];
}
