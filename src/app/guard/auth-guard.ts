import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private auth: AuthService){}

    canActivate(){
        
        if(!this.auth.isAuthenticated()){
            this.router.navigate(['/singlejok/auth/login']);        // 인증이 되지 않았을 경우 로그인으로 이동시킨다
            return false;
        }
        
        return true;
    }
}
