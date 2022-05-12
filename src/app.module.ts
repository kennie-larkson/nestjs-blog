import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entity';
import { BlogImage } from './blog/entities/blogImage.entity';
import envConfig from 'config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Set to global
      envFilePath: [envConfig.path],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres', // Database type
        entities: [Blog, BlogImage], // Data table entity
        host: configService.get('DATABASE_HOST'), // Host, localhost by default
        port: configService.get<number>('DATABASE_PORT'), // Port number
        username: configService.get('DATABASE_USERNAME'), // user name
        password: configService.get('DATABASE_PASSWORD'), // password
        database: configService.get('DATABASE_NAME'), //Database name
        //timezone: '+08:00', //Time zone configured on server
        synchronize: true, //The database table is automatically created according to the entity. It is recommended to close the production environment
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '',
    //   database: 'local_pg_db',
    //   //schema: 'typeOrmBasics',
    //   entities: [Blog, BlogImage],
    //   synchronize: true, // do not set to true in production: might erase db data. It helps with automatic migration in development
    //   logging: true,
    // }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
