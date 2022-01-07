import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatStepperModule],
  exports: [MatButtonModule, MatInputModule, MatStepperModule],
})
export class MaterialModule {}
