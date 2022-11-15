import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'app/state/home/home.model';

@Component({
  selector: 'nmt-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon!: PokemonDetail | null;

  constructor() {}

  ngOnInit(): void {}
}
