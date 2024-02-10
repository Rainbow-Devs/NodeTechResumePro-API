// src/auth/auth.controller.ts
import { Controller, Request, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Request() req) {
    const user = await this.authService.validateUser(
      req.body.username,
      req.body.password,
    );

    if (!user) {
      throw new BadRequestException('Invalid username or password');
    } else {
      return this.authService.login(user);
    }
  }
}
