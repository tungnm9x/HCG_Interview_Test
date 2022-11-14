import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, FormsModule],
  exports: [SkeletonComponent, CommonModule, FormsModule],
})
export class SharedModule {}
