import { Strategy } from 'passport-jwt';
import { User } from 'src/common/entities/user.entity';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    validate(payload: {
        nickname: string;
        sub: number;
    }): Promise<User>;
}
export {};
