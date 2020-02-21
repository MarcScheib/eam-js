import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async findAll(): Promise<User[]> {
    return await this.repo.find();
  }

  async getUser(id: number): Promise<User> {
    return await this.repo.findOne({
      select: ['id', 'name'],
      where: [{ id }],
    });
  }

  async getUserByName(name: string): Promise<User> {
    return await this.repo.findOne({
      select: ['id', 'name'],
      where: [{ name }],
    });
  }

  async create(user: Partial<User>): Promise<User> {
    return await this.repo.save(user);
  }
}
