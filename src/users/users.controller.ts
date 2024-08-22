import {
  Body,
  Controller,
  Delete,
  Headers,
  Ip,
  Get,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Post,
  Patch,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('users')
export class UsersController {
  @Get('/:id?')
  getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit)
    console.log(page)
    return 'Get request to users'
  }

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return 'Post request to users'
  }

  @Patch()
  updateUsers() {
    return 'Post request to users'
  }

  @Put()
  modifyUsers() {
    return 'Post request to users'
  }

  @Delete()
  deleteUsers() {
    return 'Post request to users'
  }
}
