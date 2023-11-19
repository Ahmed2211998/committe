import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNewComiteComponent } from './components/add-new-comite/add-new-comite.component';
import { ComiteDataComponent } from './components/comite-data/comite-data.component';
import { ComiteMembersComponent } from './components/comite-members/comite-members.component';
import { CommitteesComponent } from './components/committees/committees.component';
import { FormComponent } from './components/form/form.component';
import { MembersComponent } from './components/members/members.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { DisplaytableComponent } from './components/displaytable/displaytable.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AddNewComiteComponent,
   
    ComiteDataComponent,
    ComiteMembersComponent,
    CommitteesComponent,
   
    FormComponent,
    MembersComponent,
    NavbarComponent,
    SearchComponent,
   
    TasksComponent,
   
    DisplaytableComponent,
        SearchPipe,
        FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIf,
    HttpClientModule,  //imported the module
    ReactiveFormsModule,
    RouterModule, 
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
