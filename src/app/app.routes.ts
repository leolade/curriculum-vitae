import {Routes} from '@angular/router';

export class AppRoutes {
  static routes: Routes = [
    {
      path: 'cv',
      loadChildren: () => import('./curriculum-vitae/curriculum-vitae.module').then(m => m.CurriculumVitaeModule)
    },
    {
      path: '',
      redirectTo: 'cv',
      pathMatch: 'full',
    },
  ];
}
