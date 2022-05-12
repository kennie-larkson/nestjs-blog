import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { BlogImage } from './entities/blogImage.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
    @InjectRepository(BlogImage)
    private blogImageRepository: Repository<BlogImage>,
  ) {}
  async create(createBlogDto: CreateBlogDto) {
    // const image = await this.blogImageRepository.save(createBlogDto.blogImage);
    // const blog = createBlogDto;
    // blog.blogImage = image;
    //return await this.blogRepository.save(createBlogDto);
    return await this.blogRepository.save(createBlogDto);
    //return 'This action adds a new blog';
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
    //return `This action returns all blog`;
  }

  async findOne(id: number): Promise<Blog> | null {
    return await this.blogRepository.findOneOrFail(id);
    //return `This action returns a #${id} blog`;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.blogRepository.findOneOrFail(id);

    if (!blog) {
      console.error(`We cannot find blog with the ID ${id}`);
      return;
    }
    return await this.blogRepository.update(id, updateBlogDto);
    //return `This action updates a #${id} blog`;
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.blogRepository.delete(id);
    //return `This action removes a #${id} blog`;
  }
}
