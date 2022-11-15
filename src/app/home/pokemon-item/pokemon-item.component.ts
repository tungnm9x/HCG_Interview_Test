import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'app/state/home/home.model';

@Component({
  selector: 'nmt-pokemon-item',
  templateUrl: './pokemon-item.component.html',
})
export class PokemonItemComponent implements OnInit {
  @Input() item!: PokemonDetail;

  constructor() {}

  ngOnInit(): void {}
}
