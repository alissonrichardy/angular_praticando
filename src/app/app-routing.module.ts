import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './genericos/page-not-found/page-not-found.component';
import { PraticandoCssComponent } from './genericos/praticando-css/praticando-css.component';
import { FormValidationComponent } from './formularios/form-validation/form-validation.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'formulario', component: FormValidationComponent },
    { path: 'css', component: PraticandoCssComponent },
    { path: 'rotaComParametro/:paramentro', component: PageNotFoundComponent },
    //this.route.snapshot.paramMap.get('paramentro);
    //this.route.paramMap.subscribe((params: ParamMap) => console.log(params.get('paramentro')));
    { path: '', pathMatch: 'full', redirectTo: 'formulario' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }