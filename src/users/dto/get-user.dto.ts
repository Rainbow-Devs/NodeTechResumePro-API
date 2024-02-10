import { ApiProperty } from '@nestjs/swagger';

// Purpose: DTO for getting a user.
export class GetUserDto {
  @ApiProperty()
  username: string;
}
