import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {}
