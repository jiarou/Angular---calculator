import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './show/show.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ResultService } from './result.service';

@NgModule({
  declarations: [MainComponent, ShowComponent, InputFieldComponent],
  imports: [
    CommonModule
  ],
  providers: [ResultService],
  exports: [MainComponent],
})
export class CalculatorModule { }
