import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty({
    description: 'Status code HTTP.',
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Message(s) of detailed error(s).',
    example:
      'Not Found: Resource not found or user lacks required permissions.',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP error type.',
    example: 'Not Found',
  })
  error: string;
}
