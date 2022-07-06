import { Router } from '@angular/router';
import { DataModel } from './../modal/data.modal';
import { NumberCrunchServiceService } from './../services/number-crunch-service.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

export class User {
  constructor(
    public maxCount: any,
    public patient: any,
    public doctor: any,
    public fileUpload: any
  ) {}
}
@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.css'],
})
export class IndexesComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  DataModal:DataModel=new DataModel;

  public form: FormGroup;
  file:any;
  constructor(private fb: FormBuilder, private apiService: NumberCrunchServiceService, private router:Router) {
    this.form = this.fb.group({
      maxCount: [
        null,
        [Validators.required, Validators.min(1)],
      ],
      patient: [
        null,
        [Validators.required, Validators.min(1)],
      ],
      doctor: [null, [Validators.required, Validators.min(1)]],
       fileUpload: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  //custom validation
  checkFileType(control: AbstractControl): { [key: string]: any } | null {
    const files: File[] = control.value;
    let errors: string[] = [];

    if (files?.length >= 1) {
      for (let index = 0; index < files.length; index++) {
        //Use a type list here to check for your types for example "image/jpeg"
        if (files[index].type === '') {
          errors.push(`${files[index].name} has an invalid type of unknown\n`);
        }
      }

      return errors.length >= 1 ? { invalid_type: errors } : null;
    }
    return null; // no file, can be capture by "Required" validation
  }
  get f() { return this.form.controls; }
  // login() {
  //   debugger;
  //   if (this.form.valid) {
  //     this.loggedIn.emit(
  //       new User(
  //         this.form.value.maxCount,
  //         this.form.value.patient,
  //         this.form.value.doctor,
  //         this.form.value.fileUpload
  //       )
  //     );
  //   } else {
  //     return;
  //   }
  // }
  submitData(){
     console.log("Click");
     if(this.form.controls['patient'].value <=this.form.controls['maxCount'].value &&
     this.form.controls['doctor'].value <=this.form.controls['maxCount'].value ){
      const formData: FormData = new FormData();
      formData.append("maxCount",this.form.value.maxCount);
      formData.append("patient",this.form.value.patient);
      formData.append("doctor",this.form.value.doctor);
      formData.append("fileUpload",this.form.value.fileUpload);
      this.apiService.postData(formData)
     .subscribe(
     res=>{
     console.log(res);
     this.form.reset();
    // debugger
     this.router.navigate(["/defualtComponent"])

     },
     err=>{

     }
     )
     }else{
      alert("Patient or doctor should be less than max Count")
     }



  }
  get fileUpload() {
    return this.form.get('fileUpload');
  }
 readTextFile(event:any)
{
  //debugger;
  let file = event?.target?.files[0];
  this.file = file;
 if(file.name.slice(file.name.lastIndexOf('.')+1, file.name.length) != 'txt'){
    alert("Only text file can be uploaded")
    this.form.get('fileUpload')?.addValidators([ageRangeValidator()])
   this.form.get('fileUpload')?.setValue(null);
 }

 function ageRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value))) {
        return { 'invalid': true };
      }
      return null;
  };
}
}
}
