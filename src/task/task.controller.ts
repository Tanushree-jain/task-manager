import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() dto: CreateTaskDto): Task {
    return this.taskService.createTask(dto);
  }

  @Get()
  findAll(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.taskService.deleteTask(Number(id));
  }
}
