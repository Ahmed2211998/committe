import { Router } from '@angular/router';
import { AddNewComiteComponent } from '../add-new-comite/add-new-comite.component';


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/shared/service.service';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Committes } from './../../model/committes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  implements OnInit{
  addNewcommites!: FormGroup;
  Comobj: Committes = new Committes();
  commitList: Committes[] = [];
  constructor( 
    private _ServiceService:ServiceService,
    private _Router:Router,
    private formBuilder: FormBuilder,){}

// committeeForm :FormGroup= new FormGroup({
//   Scopeofthecommittee: new FormControl("",
//   [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   Theadministrationconcerned: new FormControl("",
//   [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   City: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   datastart: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   dataend: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   Typeofcommittee: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   Generalpurposeofthecommittee: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//   numbercommittee: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
//   name: new FormControl(""
//   ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),

// })

ngOnInit(): void {
  this.getAllCommittes();

  this.addNewcommites = this.formBuilder.group({
    id: [''],
    Scopeofthecommittee:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    Theadministrationconcerned: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    City: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    datastart: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    dataend: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    Typeofcommittee: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    Generalpurposeofthecommittee: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    numbercommittee:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
    });  

}
  


  addcomments(): void {
    this.Comobj.id = this.addNewcommites.value.id;
    this.Comobj.status = this.addNewcommites.value.status;
    this.Comobj.City = this.addNewcommites.value.City;
    this.Comobj.Generalpurposeofthecommittee = this.addNewcommites.value.Generalpurposeofthecommittee;
    this.Comobj.Scopeofthecommittee = this.addNewcommites.value.Scopeofthecommittee;
    this.Comobj.Theadministrationconcerned = this.addNewcommites.value.Theadministrationconcerned;
    this.Comobj.Typeofcommittee = this.addNewcommites.value.Typeofcommittee;
    this.Comobj.dataend = this.addNewcommites.value.dataend;
    this.Comobj.datastart = this.addNewcommites.value.datastart;
    this.Comobj.name = this.addNewcommites.value.name;
    this.Comobj.numbercommittee = this.addNewcommites.value.numbercommittee;

    this._ServiceService.addCommittes(this.Comobj).subscribe({
      next: (res) => {
        this.getAllCommittes();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  
    // if (this.addNewcommites.valid == true) {
    //   this._ServiceService.addNewiMembrs(detalis).subscribe({
    //     next: (data) => {
    //       this.addNewcommites.reset();
    //       this.addData();
    //       console.log( data);
    //       alert('تم التسجيل');
  
    //       this._Router.navigate(['/committee']);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // }
  }

getAllCommittes(): void {
  this._ServiceService.getAllCommittes().subscribe({
    next: (res) => {

      this.commitList = res;
    },
    error: (err) => {
      console.log('err fetch data');
    },
  });
}


editcommite(emp: Committes, flag:boolean) {
  this.addNewcommites.controls['id'].setValue(emp.id);
  this.addNewcommites.controls['City'].setValue(emp.City);
  this.addNewcommites.controls['Generalpurposeofthecommittee'].setValue(emp.Generalpurposeofthecommittee );
  this.addNewcommites.controls['Scopeofthecommittee'].setValue(emp.Scopeofthecommittee);
  this.addNewcommites.controls['Theadministrationconcerned'].setValue(emp.Theadministrationconcerned);
  this.addNewcommites.controls['Typeofcommittee'].setValue(emp.Typeofcommittee);
  this.addNewcommites.controls['dataend'].setValue(emp.dataend );
  this.addNewcommites.controls['datastart'].setValue(emp.datastart);
  this.addNewcommites.controls['name'].setValue(emp.name);
  this.addNewcommites.controls['numbercommittee'].setValue(emp.numbercommittee);
  
  if(flag) this.addNewcommites.disable();
  else this.addNewcommites.enable();
}

updateCommittes(): void {
  this.Comobj.id = this.addNewcommites.value.id;
  this.Comobj.status = this.addNewcommites.value.status;
  this.Comobj.City = this.addNewcommites.value.City;
  this.Comobj.Generalpurposeofthecommittee = this.addNewcommites.value.Generalpurposeofthecommittee;
  this.Comobj.Scopeofthecommittee = this.addNewcommites.value.Scopeofthecommittee;
  this.Comobj.Theadministrationconcerned = this.addNewcommites.value.Theadministrationconcerned;
  this.Comobj.Typeofcommittee = this.addNewcommites.value.Typeofcommittee;
  this.Comobj.dataend = this.addNewcommites.value.dataend;
  this.Comobj.datastart = this.addNewcommites.value.datastart;
  this.Comobj.name = this.addNewcommites.value.name;
  this.Comobj.numbercommittee = this.addNewcommites.value.numbercommittee;

  this._ServiceService.updateCommittes(this.Comobj).subscribe({
    next: (res) => {
      console.log(res);
      this.getAllCommittes();
    },
    error: (err) => {
      console.log(err);
    },
  });
}
deleteCommittes(): void {

  this._ServiceService.deleteCommittes(this.addNewcommites.value.id).subscribe({
    next: (data) => {
      this.getAllCommittes();
    },
    error: (err) => {
      console.log(err);
    },
  });
}




}
