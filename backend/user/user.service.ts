import { UserRepository } from './user.repository';

export class UserService {
    private readonly userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }

    public async getUsers(): Promise<any> {
        return this.userRepository.getAll()
    }
}