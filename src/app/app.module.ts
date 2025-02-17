import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from '../modules/task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/modules/category/category.module';
import { UserModule } from 'src/modules/user/user.module';


@Module({
  imports:[TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'admin.1234',
    database: 'todo_list',
    entities: ["**/*.entity.js"],
    synchronize: false,
  }), TaskModule, CategoryModule, UserModule] ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
