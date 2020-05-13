import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Personne} from '../../app.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PersonneRepositoryService} from '../services/personne-repository.service';

@Injectable()
export class PersonneResolverService implements Resolve<Personne> {

  constructor(
    private personneRepositoryService: PersonneRepositoryService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne> | Promise<Personne> | Personne {
    return this.personneRepositoryService.getPersonne();
  }

}
