import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../users/dto";
import { UserLoginDTO } from "./dto";
import { AuthUserResponse } from "./response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUsers(dto)
    }

    @Post('login')
    login(@Body() dto:UserLoginDTO): Promise<AuthUserResponse>{
        return this.authService.loginUser(dto)
    }
}
