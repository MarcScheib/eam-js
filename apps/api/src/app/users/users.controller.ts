import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { serialize } from './response';
import { UserDto } from './response/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Crud({
  model: {
    type: UserDto,
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
