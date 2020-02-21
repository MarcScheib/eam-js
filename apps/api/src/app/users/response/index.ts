import { SerializeOptions } from '@nestjsx/crud';
import { UserDto } from './user.dto';

export const serialize: SerializeOptions = {
  get: UserDto,
  getMany: UserDto,
  create: UserDto,
  createMany: UserDto,
  update: UserDto,
  replace: UserDto,
  delete: UserDto,
};
