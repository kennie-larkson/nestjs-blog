export class CreateBlogImageDto {
  blogImageId: number;
  blogCaption: string;
  blogLink: string;
}

export class CreateBlogDto {
  blogName: string;
  blogUrl: string;
  //blogImage: CreateBlogImageDto;
}
