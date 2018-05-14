import { Injectable } from "@angular/core";
import { Router, CanActivateChild } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthChildGuard implements CanActivateChild{

    constructor(private router: Router, private auth: AuthService){

    }

    canActivateChild(){
        if(!this.auth.isAuthenticated()){
            this.router.navigate(['signin']);
            return false;
        }

        return true;
    }

}
