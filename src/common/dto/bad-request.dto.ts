import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponse {
  @ApiProperty({
    description: 'Status code HTTP',
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Message(s) of detailed error(s).',
    example: ['name should not be empty', 'name must be a string'],
    type: [String],
  })
  message: string[] | string;

  @ApiProperty({
    description: 'HTTP error type.',
    example: 'Bad Request',
  })
  error: string;
}
