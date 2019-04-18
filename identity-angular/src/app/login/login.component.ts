import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEndpointsService } from '../_services/HttpEndpoints.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private HttpEndpoints: HttpEndpointsService
    ) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.HttpEndpoints.login(this.model).subscribe(
      () => {
        this.router.navigate(['/home']);
        console.log('Sucesso');
      }, error => {
        console.log(error);
      }
    );
  }
}
