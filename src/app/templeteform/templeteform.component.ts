import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-templeteform',
  templateUrl: './templeteform.component.html',
  styleUrls: ['./templeteform.component.css']
})
export class TempleteformComponent implements OnInit {

  constructor() { }
model={
  username:'',
  useremail:'',
  contact:'',
  location:'',
  checkbox:'',
  Gender:'',
  Password:'',
  Confirmpassword:''

}
  ngOnInit(): void {
  }
//getvalues(f:NgForm){
  //console.log(f.value);
  onSubmit(form:NgForm)
  {
    console.log(form.value);
  }
}


