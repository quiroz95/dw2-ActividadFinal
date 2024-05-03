import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';//

import { Hero } from './hero';//
import { HEROES } from './mock-heroes';//
import { MessageService } from './message.service';//


//GETHEROES
//GETHERO
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('El servicio de Héroes: obteniendo héroes.');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
   // Por ahora, supongamos que siempre existe un héroe con el `id` especificado.
    // El manejo de errores se agregará en el siguiente paso del tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}