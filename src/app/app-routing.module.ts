import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComiteComponent } from './components/add-new-comite/add-new-comite.component';
import { FormComponent } from './components/form/form.component';
import { ComiteDataComponent } from './components/comite-data/comite-data.component';
import { ComiteMembersComponent } from './components/comite-members/comite-members.component';
import { CommitteesComponent } from './components/committees/committees.component';
import { MembersComponent } from './components/members/members.component';
import { SearchComponent } from './components/search/search.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DisplaytableComponent } from './components/displaytable/displaytable.component';

const routes: Routes = [
 

  {path:"", redirectTo:"addcommitte", pathMatch:"full"},

  {path:"addcommitte", component:AddNewComiteComponent, title:"addcommitte"},
  
  {path:"form", component:FormComponent, title:"form"},
  {path:"displaytable", component:DisplaytableComponent, title:"displaytable"},
  {path:"members", component:MembersComponent, title:"members", children:[
     
  ]},
  {path:"search", component:SearchComponent, title:"search"},


  {path:"committee", component:CommitteesComponent, title:"committee"},
  {path:"tasks", component:TasksComponent, title:"tasks",children:[
    {path:"", redirectTo:"comite-data",  pathMatch:"full"},
    {path:"comite-members", component:ComiteMembersComponent, title:"comite-members"},
    {path:"comite-data", component:ComiteDataComponent, title:"comite-data"},
  ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
