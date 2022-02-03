import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    appleLogin(): string;
    appleLoginCallback(): Promise<string>;
}
