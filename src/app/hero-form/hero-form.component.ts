import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Hero, HeroUniverse } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit{

  @Input() hero: Hero = {} as Hero;

  @Output() heroSaved: EventEmitter<void> = new EventEmitter<void>();

  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  heroUniverse: Array<HeroUniverse> = [HeroUniverse.DC, HeroUniverse.MARVEL];

  formGroup!: FormGroup;

  constructor(
    private heroService: HeroService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [this.hero.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]] ,
      description: [this.hero.description, [Validators.minLength(3)]],
      imageUrl: [this.hero.imageUrl, [Validators.required, ]],
      id: [this.hero.id],
      universe: [this.hero.universe]
    });
  }

  onGoBack(): void {
    this.goBack.emit();
  }

  save(): void {
    let hero: Hero = this.formGroup.value;
    if (this.hero.id) {
      this.heroService.updateHero(this.hero)
          .subscribe(() => this.heroSaved.emit());
    }else {
      this.heroService.addHero(hero)
          .subscribe(() => this.heroSaved.emit())
    }
  }

}
