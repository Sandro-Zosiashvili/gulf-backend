import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvantagesService } from './advantages.service';
import { CreateAdvantageDto } from './dto/create-advantage.dto';
import { UpdateAdvantageDto } from './dto/update-advantage.dto';

@Controller('advantages')
export class AdvantagesController {
  constructor(private readonly advantagesService: AdvantagesService) {}

  @Get()
  findAll() {
    return this.advantagesService.findAll();
  }


}
