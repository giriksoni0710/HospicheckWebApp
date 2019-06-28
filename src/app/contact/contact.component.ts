import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted= false;
success= false;
  constructor(private formbuilder: FormBuilder) {

    this.messageForm = this.formbuilder.group({

      name: ['',Validators.required],
message: ['', Validators.required],
email: ['',Validators.required]
    })

   }

onSubmit(){

this.submitted= true;

if(this.messageForm.invalid){
  return;
}

else{

  this.success= true;

}


}

  ngOnInit() {


  }

}
