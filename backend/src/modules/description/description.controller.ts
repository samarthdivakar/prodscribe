import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('description')
@Controller('description')
export class DescriptionController {
  
  @Get('health')
  @ApiOperation({ summary: 'Health check for description service' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  health() {
    return {
      status: 'ok',
      service: 'description',
      timestamp: new Date().toISOString(),
    };
  }

  @Post('generate')
  @ApiOperation({ summary: 'Generate product description' })
  @ApiResponse({ status: 201, description: 'Description generated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async generateDescription(@Body() body: any) {
    // TODO: Implement AI description generation
    return {
      id: 'temp-id',
      description: 'This is a placeholder description. AI integration coming soon!',
      generatedAt: new Date().toISOString(),
      status: 'success',
    };
  }
} 