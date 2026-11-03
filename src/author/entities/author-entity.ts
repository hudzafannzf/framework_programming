import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';

@Entity({ name: 'authors' })
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, name: 'nama_pengarang' })
  namaPengarang: string;

  // menyimpan path atau URL foto, bukan file fotonya
  @Column({ type: 'varchar', length: 255, nullable: true })
  foto: string | null;

  @Column({ type: 'varchar', length: 255 })
  alamat: string;

  @OneToMany(() => Book, (book) => book.author, {
    cascade: true,
  })
  books: Relation<Book[]>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}