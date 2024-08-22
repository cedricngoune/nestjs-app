import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  lastName: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  password: string
}
