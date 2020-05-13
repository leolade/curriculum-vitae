import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CategorieCompetence, Competence, Experience, Formation, ImageInfo, Personne} from '../../app.model';

@Injectable()
export class PersonneRepositoryService {

  private personne: Personne = new Personne(
    'Ladevie',
    'Léo',
    new Date('1995-03-08'),
    '06.99.43.52.72',
    'lad.leo@hotmail.fr',
    'Developpeur',
    [
      new Experience(
        'Adrea mutuelle',
        'Developpeur',
        [`Stage consistant à interfacer les logiciels de gestions externe à l'écosysteme local de la mutelle.`,
          `Pour cela, j'ai mis en place des API pouvant être consommés par les logiciels externes afin qu'Adrea puisse mieux piloter son activité.`
        ],
        'Juin 2016',
        'Septembre 2016'
      ),
      new Experience(
        'Fiducial Informatique',
        'Technicien support client',
        [`Support client de niveau 1 et 2.`,
          `Après une phase de montée en compétence sur le logiciel à destination des infirmierès et infirmier libéraux, je suis intervenu en tant que référent sur les problèmatiques en base de données, sur l'application mobile, ou encore sur les clients grands comptes`
        ],
        'Janvier 2017',
        'Avril 2018'
      ),
      new Experience(
        'Fiducial Informatique',
        'Developpeur puis Scrum master',
        [`Développement d'une application de rédactions d'actes notariés dans les technologies Angular, AngularJS et Java.`,
          `Durant cette période, et en parralèle d'évolution fonctionnelle j'ai notamment été un acteur majoritaire de la réduction de la dette technique de l'application.`,
          `En effet, j'ai réaliser la quasi totalité de la migration de l'application de technologies AngularJS / Java / ActionScript vers les technologies Angular 6 (puis Angular 7 et 8) / Java.`,
          `De part cette expériences, je suis aujourd'hui le référent de l'équipe sur les technologies Front-end`,
        ],
        'Avril 2018',
        `Aujourd'hui`
      ),
    ],
    [
      new CategorieCompetence(
        'Front-end',
        null,
        null,
        [
          new Competence('Angular', null, new ImageInfo('ic-angular.svg', 9, 9)),
          new Competence('Angular Material', null, new ImageInfo('ic-angular-material.svg', 9, 9)),
          new Competence('Angular JS', null, new ImageInfo('ic-angular-js.png', 9, 9)),
          new Competence('Typescript', null, new ImageInfo('ic-typescript.png', 9, 9)),
          new Competence('Javascript', null, new ImageInfo('ic-javascript.png', 9, 9)),
          new Competence('HTML5', null, new ImageInfo('ic-html5.png', 9, 9)),
          new Competence('CSS3', null, new ImageInfo('ic-css3.png', 8, 4)),
        ]
      ),
      new CategorieCompetence(
        'Back-end',
        null,
        null,
        [
          new Competence('JAVA SE/EE', null, new ImageInfo('ic-java.png', 9, 5)),
          new Competence('Maven', null, new ImageInfo('ic-maven.png', 4, 16)),
          new Competence('Spring', null, new ImageInfo('ic-spring.png', 4, 13)),
          new Competence('SQL', null),
        ]
      ),
      new CategorieCompetence(
        'Environnements et méthodes',
        null,
        null,
        [
          new Competence('Méthode scrum', null),
          new Competence('Git / Github', null),
          new Competence('Intellij IDEA / Webstorm', null),
          new Competence('Jenkins', null),
          new Competence('SVN', null)
        ]
      )
    ],
    [
      new Formation(
        'IUT Université Clermont Auvergne',
        'Clermont-ferrand, Aurillac',
        `DUT Gestion des entreprises et des administrations (GEA)`,
        'Septembre 2013',
        'Septembre 2015',
      ),
      new Formation(
        'IUT Université Lyon 1',
        'Villeurbanne',
        `DUT Informatique`,
        'Septembre 2015',
        'Septembre 2016',
      ),
      new Formation(
        'Scrum Alliance',
        'Lyon',
        `Certification scrum master`,
        'Mai 2019',
      ),
    ],
    ['Football', 'Nouvelles technologies', 'Gastronomie', 'Accordéon']
  );

  constructor() {
  }

  getPersonne(): Observable<Personne> {
    return of(this.personne);
  }
}
