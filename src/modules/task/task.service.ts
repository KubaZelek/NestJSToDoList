import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor( @InjectRepository(Task) private readonly taskRepository: Repository<Task>, ) {} 
  
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto); 
  }
  async findAll():Promise<Task[]> { 
    return this.taskRepository.find();
  }
  async findOne(id: number) {
    return await this.taskRepository.findOneBy({id});
  }


  async  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneBy({id});
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.catId = updateTaskDto.catId;
    task.datetime = updateTaskDto.datetime;
    task.userId = updateTaskDto.userId;
    task.isDone = updateTaskDto.isDone;
    return this.taskRepository.save(task);
  }


  async remove(id: number) {
    return this.taskRepository.delete({ id });
  }
}
