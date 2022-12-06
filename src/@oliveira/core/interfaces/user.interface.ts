export interface UserInterface {
    getName(): string;
    getEmail(): string;
    getUsername(): string;
    getAuthorization(): string;
    isLoggedIn(): boolean;
    setAuthorization(authorization: string): void;
    setUser(email: string, name: string, username: string);
}
