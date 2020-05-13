import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibModule} from '../lib/lib.module';
import {PersonneRepositoryService} from './services/personne-repository.service';
import {PersonneResolverService} from './resolvers/personne-resolver.service';
import {TrueResolverService} from './resolvers/true-resolver.service';
import {FalseResolverService} from './resolvers/false-resolver.service';

const services: Provider[] = [
  PersonneRepositoryService,
  PersonneResolverService,
  TrueResolverService,
  FalseResolverService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibModule
  ],
  exports: [
    LibModule,
  ],
  providers: services,

})
export class SharedModule { }
