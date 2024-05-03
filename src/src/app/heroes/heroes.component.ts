import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // se importa nuevo archivo "hero"
import { HEROES } from '../mock-heroes'; //Importamos el mock HEROES 
import { HeroService } from '../hero.service';//
import { MessageService } from '../message.service';//


// Se añade la propiedad 'hero' denominada Windstorm
// Se saca las propiedades 'id' y 'name' de la clase HeroesComponent
// Incorporamos el constructor
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
export class HeroesComponent implements OnInit {
    //Asignar a la variable heroes el arraay HEROES
    heroes = HEROES;
    selectedHero: Hero | undefined;
  
    constructor() { }                     
  
    ngOnInit() {
    }
    
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
  */

  export class HeroesComponent implements OnInit {

    selectedHero?: Hero;
  
    heroes: Hero[] = [];
  
    constructor(private heroService: HeroService, private messageService: MessageService) { }
  
    ngOnInit(): void {
      this.getHeroes();
    }
  
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      this.messageService.add(`Componente Héroes: Héroe seleccionado con Id=${hero.id}`);
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

  
  }