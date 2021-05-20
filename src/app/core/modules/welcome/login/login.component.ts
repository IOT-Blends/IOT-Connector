import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.commonService.isUserLoggedIn(true);
    this.router.navigate(['/products']);
  }
}
