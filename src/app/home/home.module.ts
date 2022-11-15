import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CarouselModule } from 'app/shared/carousel/carousel.module';
import { ModalModule } from 'app/shared/modal/modal.module';
import { SharedModule } from 'app/shared/shared.module';
import { HomeEffects } from 'app/state/home/home.effects';
import { HomeComponent } from './home.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { HomeSharedModule } from './shared/home-shared.module';

@NgModule({
  declarations: [HomeComponent, ItemSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    HomeSharedModule,
    CarouselModule,
    ModalModule,
    SharedModule,
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
