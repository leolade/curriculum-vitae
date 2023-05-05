import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatCardModule} from "@angular/material/card";

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot(AppRoutes.routes),
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
