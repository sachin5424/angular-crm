import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const material_ui=[
  MatListModule,
  MatSliderModule,
  MatExpansionModule,
  MatGridListModule,
  MatCardModule,
  LayoutModule,
  MatStepperModule,
  MatProgressSpinnerModule
  
]


@NgModule({
  exports: [material_ui],
  imports: [material_ui]
})
export class AngularMaterialModule { }
