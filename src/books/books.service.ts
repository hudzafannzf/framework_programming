import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { error } from 'console';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'the great gatsby',
            author: 'f. scott fitsgerald',
            isbn: '984-7-2345-7643-5',
            publishedyear: 1925,
            isavailable: true
        },
        {
            id: 2,
            title: 'to kill a mockingbird',
            author: 'harper lee',
            isbn: '984-0-06-112000-4',
            publishedyear: 1960,
            isavailable: false
        }
    ];

    findall(): Book[]{
        return this.books;
    }

    simpandata(createbookdto: CreateBookDto): Book{
        const newbook: Book = {
            id: this.books.length + 1,
            title: createbookdto.title,
            author: createbookdto.author,
            isbn: createbookdto.isbn,
            publishedyear: createbookdto.publicationYear,
            isavailable: true
        };
        this.books.push(newbook)

        return newbook;
    };

    updatedata(id: number, updatebookdto: CreateBookDto): Book{
        const bookIndex = this.books.findIndex(Book => Book.id === id);
        if(bookIndex === -1) {
            throw new Error(`buku dengan id ${id} tidak ditemukan`);
        }

        const updatedbook: Book = {
            ...this.books[bookIndex],
            title: updatebookdto.title,
            author: updatebookdto.author,
            isbn: updatebookdto.isbn,
            publishedyear: updatebookdto.publicationYear,
        };
        this.books[bookIndex] = updatedbook;
        return updatedbook;
    }

    hapusdata(id: number): string {
        const bookIndex = this.books.findIndex(Book => Book.id === id);
        if (bookIndex === -1) {
            throw new Error(`buku dengan id ${id} tidak ditemukan`);
        }
        this.books.splice(bookIndex, 1);
        return `Buku dengan id ${id} berhasil dihapus`;
    }

}
