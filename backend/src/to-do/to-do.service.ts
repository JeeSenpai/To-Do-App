import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDo } from './entities/to-do.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToDoService {
  constructor(@InjectRepository(ToDo) private readonly todoRepository: Repository<ToDo>) {}
  
  async create(createToDoDto: CreateToDoDto) {
    try {
      let formData = this.todoRepository.create({
          todo: createToDoDto.todo
      })

      let save = await this.todoRepository.save(formData)
      if(save){
        return {
          msg: 'Saved.',
          status: HttpStatus.CREATED,
        };
      }
      else{
        return {
          msg: 'Error',
          status: HttpStatus.BAD_REQUEST,
        };
      }
    } catch (error) {
      return error
    }
  }

  findAll() {
    return this.todoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} toDo`;
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    try {
      let formData = await this.todoRepository.update( id, { 
          todo: updateToDoDto.todo
      })

      if(formData){
        return {
          msg: 'Updated.',
          status: HttpStatus.ACCEPTED,
        };
      }
      else{
        return {
          msg: 'Error',
          status: HttpStatus.BAD_REQUEST,
        };
      }
    } catch (error) {
      return error
    }
  }

  remove(id: number) {
    return this.todoRepository.delete({ id: id })
  }
}
