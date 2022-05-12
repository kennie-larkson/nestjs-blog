import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { ConfigService } from '@nestjs/config';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly configService: ConfigService,
  ) {
    console.log(this.configService.get<number>('DATABASE_HOST'));
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    // const blog = new Blog();
    // blog.blogName = createBlogDto.blogName;
    // blog.blogUrl = createBlogDto.blogUrl;
    // await blog.save();
    // return blog;
    const new_blog = await this.blogService.create(createBlogDto);
    console.log(new_blog);
    return new_blog;
  }

  @Get()
  async findAll() {
    //return await Blog.find();
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    //return await Blog.findOne({ id });
    return this.blogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
