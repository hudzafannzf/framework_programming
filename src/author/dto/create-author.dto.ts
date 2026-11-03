import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty({ message: 'Nama pengarang harus di isi' })
  @IsString({ message: 'Nama pengarang harus berupa teks' })
  @MaxLength(100, { message: 'Nama pengarang maksimal 100 karakter' })
  readonly namaPengarang: string;

  @IsOptional()
  @IsString({ message: 'Foto harus berupa teks (path atau URL)' })
  @MaxLength(255, { message: 'Path foto maksimal 255 karakter' })
  readonly foto?: string;

  @IsNotEmpty({ message: 'Alamat harus di isi' })
  @IsString({ message: 'Alamat harus berupa teks' })
  @MaxLength(255, { message: 'Alamat maksimal 255 karakter' })
  readonly alamat: string;
}