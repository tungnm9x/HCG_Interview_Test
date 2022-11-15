import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HomeSharedModule } from 'app/home/shared/home-shared.module';
import { ModalModule } from 'app/shared/modal/modal.module';
import { PaginationModule } from 'app/shared/pagination/pagination.module';
import { SharedModule } from 'app/shared/shared.module';
import { PokemonEffects } from 'app/state/pokemon/pokemon.effects';
import { PokemonListComponent } from './pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PokemonListComponent,
      },
    ]),
    HomeSharedModule,
    SharedModule,
    EffectsModule.forFeature([PokemonEffects]),
    ReactiveFormsModule,
    PaginationModule,
    ModalModule,
  ],
})
export class PokemonListModule {}
