import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenResponse {
  @ApiProperty({
    description: 'Status code HTTP',
    example: 403,
  })
  statusCode: 403;

  @ApiProperty({
    description: 'Message(s) od detailed error(s).',
    example:
      'Forbidden: User does not have the required role to access this resource.',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP error type.',
    example: 'Forbidden',
  })
  error: string;
}
