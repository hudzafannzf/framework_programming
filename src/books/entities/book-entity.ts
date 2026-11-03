import { join } from 'path';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Author } from '../../author/entities/author-entity.js';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 100 })
  isbn: string;

  @Column({ type: 'int', default: 0, name: 'publish_year' })
  publishYear: number;

  @Column({ type: 'boolean', default: true, name: 'is_available' })
  isAvailable: boolean;

  @OneToOne(() => Author, { cascade: true })
  @JoinColumn({name: 'author_id'})
  author:Author

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}