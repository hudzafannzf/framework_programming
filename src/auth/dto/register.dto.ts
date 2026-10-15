import { IsNotEmpty, MaxLength, IsEmail } from "class-validator";

export class registerDto {
    @IsNotEmpty ({message: "Username harus diisi"})
    @MaxLength(30, { message: "Username maksimal 30 karakter" })
    readonly username: string;

    @IsNotEmpty({message: "Email harus diisi"})
    @IsEmail({}, { message: "Format email harus sesuai, misalnya user@example.com" })
    readonly email: string;

    @IsNotEmpty({message: "Password harus diisi"})
    @MaxLength(8, { message: "Password maksimal 8 karakter" })
    readonly password: string;

    @IsNotEmpty({message: "Konfirmasi password harus diisi"})
    @MaxLength(8, { message: "Konfirmasi password maksimal 8 karakter" })
    readonly confirmPassword: string;
}