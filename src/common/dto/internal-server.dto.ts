import { ApiProperty } from '@nestjs/swagger';

export class InternalServerErrorResponse {
  @ApiProperty({
    description: 'Status code HTTP',
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Message(s) of detailed error(s).',
    example:
      'An unexpected error occurred on the server, please test again later.',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP error type',
    example: 'Internal Server Error',
  })
  error: string;
}
