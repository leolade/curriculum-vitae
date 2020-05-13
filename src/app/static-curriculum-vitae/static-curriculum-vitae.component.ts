import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Personne} from '../app.model';

class UnsubscribeOnDestroy implements OnDestroy {
  componentDestroyed: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}

@Component({
  selector: 'app-static-curriculum-vitae',
  templateUrl: './static-curriculum-vitae.component.html',
  styleUrls: ['./static-curriculum-vitae.component.scss']
})
export class StaticCurriculumVitaeComponent extends UnsubscribeOnDestroy  implements OnInit {
  personne: Personne;
  printMode: boolean;

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.data
      .pipe(
        takeUntil(this.componentDestroyed)
      )
      .subscribe(
        (data: Data) => {
          this.personne = data.personne;
          this.printMode = data.printMode;
        }
      );
  }

}
