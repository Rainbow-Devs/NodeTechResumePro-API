// src/users/users.controller.ts
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'; // Assume this DTO exists
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Serialize } from 'src/interceptors/serializeInterceptor';
import { UserDto } from './dto/user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully registered.',
    type: UserDto,
  })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('user')
  @ApiBody({ type: GetUserDto })
  @UseGuards(AuthGuard('jwt'))
  @Serialize(UserDto)
  async getUser(@Body() getUserDto: GetUserDto) {
    const { username } = getUserDto;
    return this.usersService.findOne(username);
  }
}
