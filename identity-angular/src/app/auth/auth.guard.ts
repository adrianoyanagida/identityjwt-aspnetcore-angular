import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEndpointsService } from '../_services/HttpEndpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private httpEndpoints: HttpEndpointsService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null || !this.httpEndpoints.isExpired()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
