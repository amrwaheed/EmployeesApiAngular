import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(
    private authservices:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'id' : new FormControl(null ),
      'username' : new FormControl(null, { validators:[ Validators.required, Validators.minLength(3) ] } ),
      'password' : new FormControl(null, { validators: [ Validators.required ,  Validators.minLength(8) ] }),
    
    });
  }

  get username(){return this.form.get('username')}
  get password(){return this.form.get('password')}

  Login(){
    if (this.form.invalid) {
      return;
    }
    let random = Math.round(Math.max(Math.random()*8)*12);
    this.form.value.id = random;
    this.authservices.login(this.form.value)

    this.router.navigate(['/employees'])
  }

  

}
