import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';//Este componente es como el panel de control principal de nuestra app. 

import { HeroesComponent } from './heroes/heroes.component';// Este es el lugar donde mostramos todos nuestros héroes, ¡es el corazón de la aplicación!

import { HeroDetailComponent } from './hero-detail/hero-detail.component';// Aquí veremos todos los detalles de un héroe en particular y tendremos la opción de hacer cambios.


// Aquí se encarga de mostrar los mensajes en la interfaz de usuario.
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}