import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class BlogImage {
  @PrimaryGeneratedColumn()
  blogImageId: number;

  @Column()
  imageLink: string;

  @Column()
  imageCaption: string;
}
