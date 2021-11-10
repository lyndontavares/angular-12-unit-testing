import { Injectable } from "@angular/core";

export interface User {
    id?: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLoggedIn: boolean;
    user: User
}
