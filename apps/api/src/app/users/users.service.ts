import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      select: ['id', 'name'],
      where: [{ id }],
    });
  }

  async getUserByName(name: string): Promise<User> {
    return await this.usersRepository.findOne({
      select: ['id', 'name'],
      where: [{ name }],
    });
  }

  async create(user: Partial<User>): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
