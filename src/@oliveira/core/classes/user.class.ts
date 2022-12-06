import {UserInterface} from "../interfaces/user.interface";

export class UserClass implements UserInterface {
    private authorization: string;
    private email: string;
    private name: string;
    private username: string;

    constructor(email: string, name: string, username: string) {
        this.setUser(email, name, username);
    }

    setUser(email: string, name: string, username: string) {
        this.email = email;
        this.name = name;
        this.username = username
    }

    isLoggedIn(): boolean {
        return false;
    }

    getAuthorization(): string {
        return this.authorization;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name
    }

    getUsername(): string {
        return this.username;
    }

    setAuthorization(authorization: string): void {
        this.authorization = authorization;
    }
}
