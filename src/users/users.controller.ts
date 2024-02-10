// src/users/users.controller.ts
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'; // Assume this DTO exists
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Serialize } from 'src/interceptors/serializeInterceptor';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  @Serialize(UserDto)
  async getUser(@Body() createUserDto: CreateUserDto) {
    const { username } = createUserDto;
    return this.usersService.findOne(username);
  }
}
