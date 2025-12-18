import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedResponse {
  @ApiProperty({
    description: 'Status',
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Detailed error message.',
    example: 'Unauthorized: Invalid credentials.',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP error type',
    example: 'Unauthorized',
  })
  error: string;
}
