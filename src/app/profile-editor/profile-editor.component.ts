import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  userList = [];
  isAddDisabled : boolean = false;

  constructor(private svc:UserService,private formBuilder: FormBuilder,) { 
 
  }
  
  profileForm = new FormGroup({
    role: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });
 

  onSubmit() {
   
    console.warn(this.userList.length);
    if(this.userList.length >0 ){
        this.svc.AddBatchRecords(this.userList).subscribe(
          userList => {
            console.log("Submitted Sucessfully");
          },
          err => {
            console.log(err);
          }
      );
  }

  }
   
   addUser(){
      console.log("inside add");
      var newUser = this.profileForm.value
      console.log(newUser);
      this.userList.push(newUser);
      var countList = this.userList.length;
  
      console.log("-userlist length"+countList);
      if( countList >= 5){
        this.isAddDisabled = true;
      }
    
    }

  ngOnInit() {
      this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role:['', Validators.required],
      phone:['', Validators.required],
      email: ['', [Validators.required,   Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]]
     
   });
   
   
  }
 

}
