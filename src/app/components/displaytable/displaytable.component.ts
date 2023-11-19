import { Component } from '@angular/core';



@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.scss']
})
export class DisplaytableComponent {
  constructor(
    
  ) {}
  
  

  // addNewitems: FormGroup = new FormGroup({
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

  // onSubmititems(): void {
 
  //   const details = this.addNewitems.value;
    
  //   console.log(details1);
   

  //   if (this.addNewitems.valid == true) {
  //     this._ServiceService.addNewitems(details).subscribe({
  //       next: (resp) => {
  //         console.log(resp);
  //         alert('تم التسجيل');
          
  //         this._Router.navigate(['/committee']);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
  // }
}
