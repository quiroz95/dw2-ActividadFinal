import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here Importamos FormsModule

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //Importamos HereosComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component';//
import { MessagesComponent } from './messages/messages.component';//
import { AppRoutingModule } from './app-routing.module';//
import { DashboardComponent } from './dashboard/dashboard.component'; //Importamos HereosComponent

// Se agregaron módulos externos en los imports para utilizar funcionalidades adicionales.
// Declaramos los módulos en la matriz para su uso posterior.

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        MessagesComponent,
        DashboardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,        //con esto se sincroniza el formsModulo
        HeroDetailComponent,
        AppRoutingModule
    ]
})
export class AppModule { }