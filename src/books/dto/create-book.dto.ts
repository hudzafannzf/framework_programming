import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({message: "Title harus diisi"})
    readonly title: string;
    @IsNotEmpty({message: "ISBN harus diisi"})
    readonly isbn: string;
    @IsNotEmpty({message: "Author harus diisi"})
    readonly author: string;
    @IsNotEmpty({message: "Tahun publikasi harus diisi"})
    readonly publicationYear: number;
    @IsNotEmpty({message: "Status ketersediaan harus diisi"})
    readonly isAvailable: boolean;
}