import { IsNotEmpty, Length } from "class-validator";

export class loginDto {
    @IsNotEmpty({message: "Email harus diisi"})
    readonly email: string;

    @IsNotEmpty({message: "Password harus diisi"})
    @Length(3, 16, { message: "Password minimal 3 karakter dan maksimal 16 karakter" })
    readonly password: string;
}