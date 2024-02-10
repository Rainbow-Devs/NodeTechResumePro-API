// src/auth/auth.controller.ts
import { Controller, Post, BadRequestException, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);

    if (!user) {
      throw new BadRequestException('Invalid username or password');
    } else {
      return this.authService.login(user);
    }
  }
}
