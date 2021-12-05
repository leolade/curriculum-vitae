class TimedObject {
  constructor(
    protected _dateDebut: string,
    protected _dateFin?: string,
  ) {
  }

  get dateDebut(): string {
    return this._dateDebut;
  }

  get dateFin(): string {
    return this._dateFin;
  }
}

export class Experience extends TimedObject {
  constructor(
    private _nomEntreprise: string,
    private _nomPoste: string,
    private _missions: string[],
    private childDateDebut: string,
    private childDateFin: string) {
    super(childDateDebut, childDateFin);
  }


  get nomEntreprise(): string {
    return this._nomEntreprise;
  }

  get nomPoste(): string {
    return this._nomPoste;
  }

  get missions(): string[] {
    return this._missions;
  }

  get missionsHTML(): string {
    return this._missions.join(`<br>`);
  }
}

export class Formation extends TimedObject {
  constructor(
    private _nomEtablissement: string,
    private _villeEtablissement: string,
    private _nomFormation: string,
    private childDateDebut: string,
    private childDateFin?: string,
  ) {
    super(childDateDebut, childDateFin);
  }


  get nomEtablissement(): string {
    return this._nomEtablissement;
  }

  get villeEtablissement(): string {
    return this._villeEtablissement;
  }

  get nomFormation(): string {
    return this._nomFormation;
  }
}

export class ImageInfo {
  constructor(
    private _name: string,
    private _height: number,
    private _width: number,
  ) {

  }

  get name(): string {
    return this._name;
  }

  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }
}

export class Competence {
  constructor(
    protected _nom: string,
    protected _niveau: number,
    protected _image: ImageInfo = null,
  ) {

  }

  get nom(): string {
    return this._nom;
  }

  get niveau(): number {
    return this._niveau;
  }

  get image(): ImageInfo {
    return this._image;
  }
}

export class CategorieCompetence extends Competence {
  constructor(
    protected _nom: string,
    protected _niveau: number,
    protected _image: ImageInfo = null,
    private _sousCompetences: Competence[] = [],
  ) {
    super(
      _nom,
      _niveau,
      _image);
  }

  get sousCompetences(): Competence[] {
    return this._sousCompetences;
  }
}

export class Personne {
  constructor(
    private _nom: string,
    private _prenom: string,
    private _dateNaissance: Date,
    private _adresse: string,
    private _numeroTelephone: string,
    private _email: string,
    private _posteRecherche: string,
    private _experiences: Experience[] = [],
    private _competences: CategorieCompetence[] = [],
    private _formations: Formation[] = [],
    private _centresInterets: string[] = [],
  ) {
  }


  get adresse(): string {
    return this._adresse;
  }

  get centresInterets(): string[] {
    return this._centresInterets;
  }

  get formations(): Formation[] {
    return this._formations;
  }

  get posteRecherche(): string {
    return this._posteRecherche;
  }

  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get dateNaissance(): Date {
    return this._dateNaissance;
  }

  get numeroTelephone(): string {
    return this._numeroTelephone;
  }

  get email(): string {
    return this._email;
  }

  get experiences(): Experience[] {
    return this._experiences;
  }

  set experiences(value: Experience[]) {
    this._experiences = value;
  }

  get competences(): CategorieCompetence[] {
    return this._competences;
  }

  set competences(value: CategorieCompetence[]) {
    this._competences = value;
  }
}
