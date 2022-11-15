import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [PokemonItemComponent, PokemonDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [PokemonItemComponent, PokemonDetailComponent],
})
export class HomeSharedModule {}
