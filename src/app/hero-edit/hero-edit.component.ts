import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HeroUniverse } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

  hero: Hero = {} as Hero;
  heroUniverse: Array<HeroUniverse> = [HeroUniverse.DC, HeroUniverse.MARVEL];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  save(): void {
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }



}
