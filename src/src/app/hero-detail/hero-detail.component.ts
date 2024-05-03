import {Component, OnInit} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common'; //Importamos Ngif UpperCasePipe
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

// Ahora hemos añadido las directivas NgIf y UpperCasePipe a nuestros componentes para mejorar la lógica y la presentación.
// También hemos agregado la propiedad de entrada '@Input hero' a la clase HeroDetailComponent para permitir la entrada de datos de un héroe específico.

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})

/*
export class HeroDetailComponent {
  @Input() hero?: Hero;
}*/

export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}