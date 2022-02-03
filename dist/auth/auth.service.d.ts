import { LoginRequestDto } from './../common/dtos/login.request.dto';
import { User } from './../common/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    login(data: LoginRequestDto): Promise<string>;
}
