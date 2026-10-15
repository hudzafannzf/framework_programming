import { Body, Controller, Post } from '@nestjs/common';
import { registerDto } from './dto/register.dto.js';
import { loginDto } from './dto/login.dto.js';
import { forgotpasswordDto } from './dto/forgotpassword.dto.js';
import { resetpasswordDto } from './dto/resetpassword.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService) {}

    // register
    @Post('register')
    register(@Body() registerdto: registerDto) {
        return this.authService.register(registerdto);
    }

    // login
    @Post('login')
    login(@Body() logindto: loginDto) {
        return this.authService.login(logindto);
    }

    // forgot password
    @Post('forgotpassword')
    forgotPassword(@Body() forgotpassworddto: forgotpasswordDto) {
        return this.authService.forgotPassword(forgotpassworddto);
    }

    // reset password
    @Post('resetpassword')
    resetPassword(@Body() resetpassworddto: resetpasswordDto) {
        return this.authService.resetPassword(resetpassworddto);
    }

}
