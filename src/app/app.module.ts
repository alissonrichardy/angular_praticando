import { RxjsModule } from './rxjs/rxjs.module';
import { ObservablesModule } from './observables/observables.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloDeVidaComponenteModule } from './ciclo-de-vida-componente/ciclo-de-vida-componente.module';
import { FormulariosModule } from './formularios/formularios.module';
import { GenericosModule } from './genericos/genericos.module';


// const appRoutes: Routes = [
//   {path: 'formulario', component: FormValidationComponent},
//   {path: 'css', component: PraticandoCssComponent},
//   {path: '', pathMatch: 'full', redirectTo: 'formulario'},
//   {path: '**', component: PageNotFoundComponent},

// ]


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GenericosModule,
    FormulariosModule, 
    //RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    CicloDeVidaComponenteModule,
    ObservablesModule,
    RxjsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
