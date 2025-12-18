import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'Username.',
    example: 'JOHN.DOE',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  nameWar: string;

  @ApiProperty({
    description: "The user's CPF for login.",
    example: '123.456.789-00',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Min(11)
  @Max(15)
  cpf: string;
}
