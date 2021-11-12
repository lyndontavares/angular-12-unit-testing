import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title='Contact Form'
  contactForm:FormGroup
  contact={name:'',email:'',text:''}
  submited=false

  constructor() {
    this.createForm()
  }

  createForm():void{
    this.contactForm = new FormGroup({
      'name': new FormControl( this.contact.name ,[
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
      ]),
      'text': new FormControl(this.contact.text, [
        Validators.required,
      ]),

    })
  }

  onSubmit() : void {
    this.submited = true
  }

  ngOnInit(): void {
  }

}
