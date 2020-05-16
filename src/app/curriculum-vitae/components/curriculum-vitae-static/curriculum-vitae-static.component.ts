import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurriculumVitaeComponent} from '../../curriculum-vitae.component';


@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: '../../curriculum-vitae.component.html',
  styleUrls: ['../../curriculum-vitae.component.scss']
})
export class CurriculumVitaeStaticComponent extends CurriculumVitaeComponent implements OnInit {

  constructor(
    protected route: ActivatedRoute,
  ) {
    super(route);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
