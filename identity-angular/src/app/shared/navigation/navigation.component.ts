import { Component, OnInit } from '@angular/core';
import { HttpEndpointsService } from 'src/app/_services/HttpEndpoints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private endpoints: HttpEndpointsService,
              private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.endpoints.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
