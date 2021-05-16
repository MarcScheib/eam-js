import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { serialize } from './response';
import { UserDtoImpl } from './response/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Crud({
  model: {
    type: UserDtoImpl,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
  serialize,
})
@Controller('users')
export class UsersController {
  constructor(public readonly service: UsersService) {}
}
