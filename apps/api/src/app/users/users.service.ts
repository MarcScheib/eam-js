import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOne({
      select: ['id', 'name'],
      where: [{ id }],
    });
  }

  async getUserByName(name: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({
      select: ['id', 'name'],
      where: [{ name }],
    });
  }

  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.usersRepository.save(user);
  }
}
