import { User } from 'src/common/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    localJoin(data: any): Promise<User>;
}
