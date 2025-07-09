import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async generateProductDescription({ productName, features, tone }: { productName: string; features: string; tone: string; }): Promise<string> {
    const prompt = `Write a ${tone} product description for a product named "${productName}". Features: ${features}`;
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes product descriptions.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 200,
    });
    return completion.choices[0]?.message?.content?.trim() || '';
  }
} 