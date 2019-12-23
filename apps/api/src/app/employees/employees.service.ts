import { Injectable } from '@nestjs/common';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly usersService: UsersService) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }
}
