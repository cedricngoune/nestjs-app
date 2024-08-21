import { Body, Controller, Delete, Headers, Ip, Get, Param, Post, Patch, Put, Query } from "@nestjs/common";

@Controller('users')
export class UsersController {

    @Get('/:id')
    getUsers(@Param('id') id: any, @Query('limit') limit: any) {
        console.log(id)
        console.log(limit)
        return "Get request to users"

    }

    @Post()
    createUsers(
        @Body('email') email: any,
        @Ip() ip: any,
        @Headers() headers: any) {
        console.log(email)
        console.log(headers )
        console.log(ip)
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