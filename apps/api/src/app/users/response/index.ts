import { SerializeOptions } from '@nestjsx/crud';
import { UserDtoImpl } from './user.dto';

export const serialize: SerializeOptions = {
  get: UserDtoImpl,
  getMany: UserDtoImpl,
  create: UserDtoImpl,
  createMany: UserDtoImpl,
  update: UserDtoImpl,
  replace: UserDtoImpl,
  delete: UserDtoImpl,
};
