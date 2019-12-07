import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
import { HomeService } from "../share/home.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private homeService : HomeService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.homeService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.homeService.deleteToken();
        return false;
      }
    return true;
  }
}
