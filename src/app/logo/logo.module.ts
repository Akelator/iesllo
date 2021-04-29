import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { ImagoComponent } from './components/imago/imago.component';

@NgModule({
  declarations: [LogoComponent, ImagoComponent],
  imports: [CommonModule],
  exports: [LogoComponent],
})
export class LogoModule {}
