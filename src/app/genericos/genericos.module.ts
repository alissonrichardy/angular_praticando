import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ClientsComponent } from './clients/clients.component';
import { ItemClientsComponent } from './clients/item-clients/item-clients.component';
import { DatatableMaterialComponent } from './datatable-material/datatable-material.component';
import { DesafioMenuComponent } from './desafio-menu/desafio-menu.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { EventComponent } from './event/event.component';
import { ClientComponent } from './input-binding/client/client.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NameChangesComponent } from './on-changes/name-changes/name-changes.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { ParenteChildComponent } from './parente-child/parente-child.component';
import { TimerComponent } from './parente-child/timer/timer.component';
import { PraticandoCssComponent } from './praticando-css/praticando-css.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';


import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    StringInterpolationComponent,
    EventBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    PraticandoCssComponent,
    MediaQueryComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientsComponent,
    ParenteChildComponent,
    TimerComponent,
    DesafioMenuComponent,
    BootstrapComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent,
    DatatableMaterialComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule
  ], exports:[PraticandoCssComponent, PageNotFoundComponent]
})
export class GenericosModule { }
