import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Logger } from "../utils/logger";

@Injectable()
export class AuthGuard implements CanActivate{

    logger:Logger = Logger.getInstance();
    
    constructor(private router: Router, private auth: AuthService){}

    canActivate(){

        this.logger.debug("S : AuthGuard > canActivate");
        this.logger.debug("isAuthenticated() : " + this.auth.isAuthenticated());
        if(!this.auth.isAuthenticated()){
            this.router.navigate(['/singlejok/auth/login']);        // 인증이 되지 않았을 경우 로그인으로 이동시킨다
            return false;
        }

        return true;
    }
}
