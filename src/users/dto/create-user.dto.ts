import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'username',
    description: 'The username of the user',
    required: true,
    type: 'string',
  })
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    required: true,
    type: 'string',
    minimum: 6,
  })
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'email@email.com',
    description: 'The email of the user',
    required: true,
    type: 'string',
  })
  email: string;

  @ApiProperty({
    example: 'firstName',
    description: 'The first name of the user',
    required: false,
    type: 'string',
  })
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'lastName',
    description: 'The last name of the user',
    required: false,
    type: 'string',
  })
  @IsOptional()
  @IsString()
  lastName: string;
}
