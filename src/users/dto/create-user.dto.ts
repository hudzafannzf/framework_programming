import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nama harus di isi' })
  @IsString({ message: 'Nama harus berupa teks' })
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  readonly nama: string;

  @IsNotEmpty({ message: 'Email harus di isi' })
  @IsEmail({}, { message: 'Format email tidak valid' })
  @MaxLength(100, { message: 'Email maksimal 100 karakter' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password harus di isi' })
  @IsString({ message: 'Password harus berupa teks' })
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  readonly password: string;

  @IsNotEmpty({ message: 'Alamat harus di isi' })
  @IsString({ message: 'Alamat harus berupa teks' })
  @MaxLength(100, { message: 'Alamat maksimal 100 karakter' })
  readonly alamat: string;

  @IsNotEmpty({ message: 'Nomor telepon harus di isi' })
  @IsString({ message: 'Nomor telepon harus berupa teks' })
  @Matches(/^(\+62|62|0)8[0-9]{8,12}$/, {
    message: 'Nomor telepon tidak valid (contoh: 081234567890)',
  })
  readonly phone: string;
}