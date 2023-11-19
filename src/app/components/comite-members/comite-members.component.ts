import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Members } from 'src/app/model/members';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-comite-members',
  templateUrl: './comite-members.component.html',
  styleUrls: ['./comite-members.component.scss']
})
export class ComiteMembersComponent {


  addNewitems!: FormGroup;
  Memobj: Members = new Members();
  membList: Members[] = [];
  

  constructor(
    private _ServiceService: ServiceService,
    private formBuilder: FormBuilder,
    private _Router:Router
  ) {}

  users: any = [];
  ngOnInit(): void {

    this.getAllMembers();
    // window.location.reload()


    this.addNewitems = this.formBuilder.group({
      id: ['',],
      status: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      namemember: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Roleinthecommittee: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      memberCV: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      phoneNumber: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Thereismoney: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    });

    // this.addNewitems = new FormGroup({
    //   Internalmember: new FormControl(''),
    //   Externalmember: new FormControl(''),
    //   namemember: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(20),
    //   ]),
    //   Roleinthecommittee: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(1),
    //     Validators.maxLength(20),
    //   ]),
    //   memberCV: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(20),
    //   ]),
    //   Thereismoney: new FormControl(''),
    //   ThereisNomoney: new FormControl(''),
    // });
  }

  
  addMembers(): void {
    this.Memobj.id = this.addNewitems.value.id;
    this.Memobj.status = this.addNewitems.value.status;
    this.Memobj.namemember = this.addNewitems.value.namemember;
    this.Memobj.Roleinthecommittee = this.addNewitems.value.Roleinthecommittee;
    this.Memobj.memberCV = this.addNewitems.value.memberCV;
    this.Memobj.Thereismoney = this.addNewitems.value.Thereismoney;

    this._ServiceService.addMembers(this.Memobj).subscribe({
      next: (res) => {
       

        this.getAllMembers();

        
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    // if (this.addNewitems.valid == true) {
    //   this._ServiceService.addNewiMembrs(detalis).subscribe({
    //     next: (data) => {
    //       this.addNewitems.reset();
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

  getAllMembers(): void {
    this._ServiceService.getAllMembers().subscribe({
      next: (res) => {

        this.membList = res;

        
        this._Router.navigate(['/tasks/comite-members']);
      },
      error: (err) => {
        console.log('err fetch data');
      },
    });
  }

  editMembers(emp: Members, flag:boolean) {
    this.addNewitems.controls['id'].setValue(emp.id);
    this.addNewitems.controls['namemember'].setValue(emp.namemember);
    this.addNewitems.controls['Roleinthecommittee'].setValue(
      emp.Roleinthecommittee
    );
    this.addNewitems.controls['memberCV'].setValue(emp.memberCV);
    this.addNewitems.controls['status'].setValue(emp.status);
    this.addNewitems.controls['Thereismoney'].setValue(emp.Thereismoney);
    if(flag) this.addNewitems.disable();
    else this.addNewitems.enable();
  }

  updateMembers(): void {
    this.Memobj.id = this.addNewitems.value.id;
    this.Memobj.status = this.addNewitems.value.status;
    this.Memobj.namemember = this.addNewitems.value.namemember;
    this.Memobj.Roleinthecommittee = this.addNewitems.value.Roleinthecommittee;
    this.Memobj.memberCV = this.addNewitems.value.memberCV;
    this.Memobj.Thereismoney = this.addNewitems.value.Thereismoney;
    this._ServiceService.updateMembers(this.Memobj).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllMembers();
        // this._Router.navigate(['/committee']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  deleteDatabyID(): void {

    this._ServiceService.deleteMembers(this.addNewitems.value.id).subscribe({
      next: (data) => {
        this.getAllMembers();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
