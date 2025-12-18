import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestResponse } from 'src/common/dto/bad-request.dto';
import { InternalServerErrorResponse } from 'src/common/dto/internal-server.dto';
import { UnauthorizedResponse } from 'src/common/dto/unauthorized.dto';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login a user.',
    description: 'Authenticate a user and returns a JWT access token.',
  })
  @ApiBody({
    type: LoginUserDto,
    description: 'Authenticate a user and returns a JWT access token.',
  })
  @ApiResponse({
    status: 200,
    description: 'User logged in successfully.',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request: Invalid input data (e.g. missing email/password)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: Invalid credentials.',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    type: InternalServerErrorResponse,
  })
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    const { accessToken, userName } = await this.authService.login(
      loginUserDto.cpf,
      loginUserDto.nameWar,
    );

    return {
      accessToken,
      userName,
    };
  }
}
