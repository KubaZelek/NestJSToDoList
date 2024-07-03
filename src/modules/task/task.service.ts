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
    const task: Task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.isDone = createTaskDto.isDone;
    task.datetime = createTaskDto.datetime;
    task.userId = createTaskDto.userId;
    task.catId = createTaskDto.catId;
    
    return this.taskRepository.save(task); 
  }
  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
