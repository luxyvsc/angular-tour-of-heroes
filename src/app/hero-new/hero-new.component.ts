import { Location } from '@angular/common';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent implements OnInit {

  hero: Hero = {} as Hero;


  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onGoBack() {
    this.location.back();
  }

  onSave() {
    this.location.back();
  }

}
