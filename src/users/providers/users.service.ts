import { Injectable } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'John@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@alice.com',
      },
    ]
  }

  public findOneById(id: number) {
    return {
      firstName: 'Alice',
      email: 'alice@alice.com',
    }
  }
}
