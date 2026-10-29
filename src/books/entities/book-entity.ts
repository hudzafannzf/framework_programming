import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UpdateDateColumn } from "typeorm/browser";

@Entity({name:'Book'})
export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type:'varchar', length:100})
    title: string;

    @Column({type:'varchar', length:50})
    author: string;

     @Column({type:'varchar', length:100})
    isbn: string;

     @Column({type:'int', default:0})
    pubLisheatYear: number;

    @Column({type:'boolean', default:true})
    IsAvailable: boolean;

    @CreateDateColumn({name:'created_at'})
    createAt:Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

    @DeleteDateColumn({name:'deleted_at'})
    deleteAt: Date;
}