import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Injectable()
export class BooksService {
  constructor(
    // Injeksi Repository TypeORM untuk entitas Book
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // Create
  async create(dto: CreateBookDto): Promise<Book> {
    const { authorId, ...rest } = dto as CreateBookDto & { authorId: string };
    const newBook = this.bookRepository.create({
      ...rest,
      author: { id: authorId },
    });
    const saved = await this.bookRepository.save(newBook);
    return this.findById(saved.id);
  }

  // Semua buku (beserta pengarangnya)
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      relations: { author: true },
      order: { createdAt: 'DESC' },
    });
  }

  // Berdasarkan ID
  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: { author: true },
    });
    if (!book) {
      throw new NotFoundException(`Buku dengan ID #${id} tidak ditemukan.`);
    }
    return book;
  }

  // Update
  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const book = await this.findById(id);

    const { authorId, author, ...rest } = dto as UpdateBookDto & {
      authorId?: string;
      author?: string;
    };
    this.bookRepository.merge(book, rest);
    const updatedAuthorId = authorId ?? author;
    if (updatedAuthorId) {
      book.author = { id: updatedAuthorId } as Book['author'];
    }

    await this.bookRepository.save(book);
    return this.findById(id);
  }

  // Hapus (soft delete)
  async remove(id: string): Promise<{ message: string; deletedId: string }> {
    await this.findById(id);
    await this.bookRepository.softDelete(id);

    return {
      message: `Buku #${id} berhasil diarsipkan (soft-deleted).`,
      deletedId: id,
    };
  }

  // Pulihkan
  async restore(id: string): Promise<{ message: string }> {
    const result = await this.bookRepository.restore(id);
    if (!result.affected) {
      throw new NotFoundException(`Buku dengan ID #${id} tidak ditemukan.`);
    }
    return { message: `Buku #${id} berhasil dipulihkan kembali.` };
  }
}