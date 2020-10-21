import { MaterialModule } from './../material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLifecicleComponent } from './main-lifecicle/main-lifecicle.component';
import { LifeCycleChildComponent } from './main-lifecicle/life-cycle-child/life-cycle-child.component';



@NgModule({
  declarations: [MainLifecicleComponent, LifeCycleChildComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [MainLifecicleComponent, LifeCycleChildComponent]
})
export class CicloDeVidaComponenteModule { }
