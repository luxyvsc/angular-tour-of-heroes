import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

import { Hero, HeroUniverse } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit{

  @Input() hero: Hero;

  @Output() heroSaved: EventEmitter<void> = new EventEmitter<void>();

  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  heroUniverse: Array<HeroUniverse> = [HeroUniverse.DC, HeroUniverse.MARVEL];

  constructor(
    private HeroService: HeroService,
    private location: Location
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onGoBack(): void {
    this.goBack.emit();
  }

  save(): void {
    if (this.hero.id) {
      this.HeroService.updateHero(this.hero)
          .subscribe(() => this.heroSaved.emit());
    }else {
      this.HeroService.addHero(this.hero)
          .subscribe(() => this.heroSaved.emit())
    }
  }

}
