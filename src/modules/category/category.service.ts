import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor( @InjectRepository(Category) private readonly categoryRepository: Repository<Category>, ) {} 
  
  create(createCategoryDto: CreateCategoryDto) {
    const category: Category = new Category();
    category.name = createCategoryDto.name;
    
    return this.categoryRepository.save(category); 
  }
 
  async findAll():Promise<Category[]> { 

    const cos =await this.categoryRepository.find();
    return cos

  }

  async findOne(id: number) {
    const fO = await this.categoryRepository.findOneBy({id});
    return fO.name;
  }

    async  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const cat = await this.categoryRepository.findOneBy({id});
    cat.name = updateCategoryDto.name;
    return this.categoryRepository.save(cat);
  }

  async remove(id: number) {
    return this.categoryRepository.delete({ id });
  }
}
