// ACTIVE DATA APPROACH
//import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// @Entity()
// export class Blog extends BaseEntity {
//   // extend the BaseEntity in order to use the Active Data Approach
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   blogName: string;

//   @Column()
//   blogUrl: string;
// }

//DATA MAPPER PATTERN
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BlogImage } from './blogImage.entity';

@Entity()
export class Blog {
  // extend the BaseEntity in order to use the Active Data Approach
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blogName: string;

  @Column()
  blogUrl: string;

  @OneToOne(() => BlogImage)
  @JoinColumn()
  blogImage: BlogImage;
}
