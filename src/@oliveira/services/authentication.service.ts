import {Injectable} from "@angular/core";
import {UserInterface} from "../core/interfaces/user.interface";
import {UserClass} from "../core/classes/user.class";

@Injectable()
export class AuthenticationService {
    private user: UserInterface;

    constructor() {
    }

    setAuthorization(authorization: string) {
        this.user.setAuthorization(authorization);
    }

    setUser(user: UserClass) {
        this.user = user;
    }

    getUser(): UserInterface {
        return this.user
    }
}
