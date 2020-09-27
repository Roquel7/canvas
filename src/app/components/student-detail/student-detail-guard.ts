import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentDetailGuard implements CanActivate {

  constructor( public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Hello from StudentDetailGuard');
    const id = +route.paramMap.get('id');

    if (isNaN(id) || id < 1) {
      console.log('Invalid student Id');
      this.router.navigate(['/students', 1]);
      return false;
    }
    return true;
  }
}
