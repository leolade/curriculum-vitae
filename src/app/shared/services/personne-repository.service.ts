import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CategorieCompetence, Competence, Experience, Formation, ImageInfo, Personne} from '../../app.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneRepositoryService {

  private personne: Personne = new Personne(
    'Ladevie',
    'Léo',
    new Date('1995-03-08'),
    '23 Rue des vignerons, 69220 Belleville en Beaujolais',
    '06.99.43.52.72',
    'lad.leo@hotmail.fr',
    'Lead developer Angular / Développeur Java',
    [
      new Experience(
        'IKIGAÏ - En mission chez un éditeur de logiciel',
        `Ingénieur d'études Angular/Java`,
        [`Développement d'une application de rédaction d'actes notariés .`,
          `Conception et veille technique en Angular de part un rôle de lead developer.`,
          `Gestion d'une équipe Scrum de 6 développeurs.`,
          `Formations et documentations de bonnes pratiques.`,
        ],
        'Août 2022',
        `aujourd'hui`
      ),
      new Experience(
        'Sopra Steria',
        `Ingénieur d'études Java`,
        [`Développement et maintenance d'une application de gestion de biens sociaux.`,
          `Maintien en condition opérationnelle d'une application en Java 8 (JSF/ Struts 2) sur l'ensemble des modules de gestion financière du produit.`,
          `J'ai également développé certaines fonctionnalités améliorant l'existant du produit.`,
        ],
        'Juin 2021',
        `Août 2022`
      ),
      new Experience(
        'Fiducial Informatique',
        'Développeur puis Scrum master',
        [`Développement d'une application de rédaction d'actes notariés dans les technologies Angular, AngularJS et Java.`,
          `Durant cette période, et en parallèle d'évolution fonctionnelle, j'ai notamment été un acteur majoritaire de la réduction de la dette technique de l'application.`,
          `En effet, j'ai réalisé une grande partie de la migration de l'application des technologies AngularJS / Action Script vers la technologie Angular 6 (puis Angular 7 et 8).`,
          `De par cette expérience, je suis devenu le référent de l'équipe sur les technologies Front-end`
        ],
        'avril 2018',
        `Juin 2021`
      ),
      new Experience(
        'Fiducial Informatique',
        'Technicien support client',
        [`Support client de niveau 1 et 2 sur un logiciel infirmier.`,
          `Je suis intervenu en tant que référent sur les problématiques en base de données, sur l'application mobile, ou encore sur les clients grands comptes.`
        ],
        'janvier 2017',
        'avril 2018'
      ),
    ],
    [

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
        'Front-end',
        null,
        null,
        [
          new Competence('Angular', null, new ImageInfo('ic-angular.svg', 9, 9)),
          new Competence('Angular Material', null, new ImageInfo('ic-angular-material.svg', 9, 9)),
          new Competence('Typescript', null, new ImageInfo('ic-typescript.png', 9, 9)),
          new Competence('Javascript', null, new ImageInfo('ic-javascript.png', 9, 9)),
          new Competence('HTML5', null, new ImageInfo('ic-html5.png', 9, 9)),
          new Competence('CSS3', null, new ImageInfo('ic-css3.png', 8, 4)),
        ]
      ),
      new CategorieCompetence(
        'Outils et méthodes',
        null,
        null,
        [
          new Competence('Méthode scrum', null, new ImageInfo('ic-csm.png', 9, 9)),
          new Competence('Git / Github', null, new ImageInfo('ic-git.png', 9, 9)),
          new Competence('Intellij IDEA', null, new ImageInfo('ic-intellij.png', 9, 9)),
          new Competence('Jenkins', null, new ImageInfo('ic-jenkins.png', 9, 6)),
        ]
      )
    ],
    [
      new Formation(
        'Scrum Alliance',
        'Lyon',
        `Certification scrum master`,
        'mai 2019',
      ),
      new Formation(
        'IUT Université Lyon 1',
        'Villeurbanne',
        `DUT Informatique`,
        'septembre 2015',
        'septembre 2016',
      ),
      new Formation(
        'IUT Université Clermont Auvergne',
        'Clermont-ferrand, Aurillac',
        `DUT Gestion des entreprises et des administrations (GEA)`,
        'septembre 2013',
        'septembre 2015',
      ),
    ],
    ['Football', 'Nouvelles technologies', 'Gastronomie', 'Musique']
  );

  constructor() {
  }

  getPersonne(): Observable<Personne> {
    return of(this.personne);
  }
}
