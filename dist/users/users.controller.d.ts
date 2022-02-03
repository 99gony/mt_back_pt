/// <reference types="passport" />
import { AuthService } from './../auth/auth.service';
import { LoginRequestDto } from './../common/dtos/login.request.dto';
import { UsersService } from './users.service';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    localLogin(data: LoginRequestDto): Promise<string>;
    authorizationUser(req: Request): Express.User;
    localJoin(data: any): Promise<import("../common/entities/user.entity").User>;
}
