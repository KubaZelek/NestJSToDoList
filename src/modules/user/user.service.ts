import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor( @InjectRepository(User) private readonly userRepository: Repository<User>, ) {} 
  
  create(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.nickname = createUserDto.nickname;
    
    return this.userRepository.save(user); 
  }

  async findAll():Promise<User[]> { 

    const cos =await this.userRepository.find();
    return cos

  }

  async findOne(id: number) {
    const fO = await this.userRepository.findOneBy({id});
    return fO.nickname;
  }

    async  update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({id});
    user.nickname = updateUserDto.nickname;
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
