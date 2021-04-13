import { Component, OnInit } from '@angular/core';

import{ Hero} from '../Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    id: 101,
    name: 'windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
