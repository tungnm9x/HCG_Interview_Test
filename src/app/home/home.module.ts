import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CarouselModule } from 'app/shared/carousel/carousel.module';
import { SharedModule } from 'app/shared/shared.module';
import { HomeEffects } from 'app/state/home/home.effects';
import { HomeComponent } from './home.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [HomeComponent, PokemonItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    CarouselModule,
    SharedModule,
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
