export interface User {
    id?: number;
    name: string;
}

export class UserService {
    isLoggedIn: boolean;
    user: User
}
