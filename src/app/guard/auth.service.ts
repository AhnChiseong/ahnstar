import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated():boolean{

    let status:boolean = false;
    console.log("AuthService - isAuthenticated : " + status);

    return status;
  }
}
