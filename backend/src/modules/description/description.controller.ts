import { Controller, Post, Body } from '@nestjs/common';
import { GenerateDescriptionDto } from '../../dto/generate-description.dto';

@Controller('description')
export class DescriptionController {
  @Post('generate-description')
  async generate(@Body() dto: GenerateDescriptionDto) {
    // ...call your service here and return the result
    return { description: 'This is a test description.' };
  }
}
