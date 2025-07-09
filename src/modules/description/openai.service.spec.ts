import { Test, TestingModule } from '@nestjs/testing';
import { OpenAIService } from './openai.service';
import { ConfigService } from '@nestjs/config';

jest.mock('openai', () => {
  return {
    OpenAI: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
              { message: { content: 'Mocked product description.' } },
            ],
          }),
        },
      },
    })),
  };
});

describe('OpenAIService', () => {
  let service: OpenAIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OpenAIService,
        {
          provide: ConfigService,
          useValue: { get: jest.fn().mockReturnValue('fake-key') },
        },
      ],
    }).compile();

    service = module.get<OpenAIService>(OpenAIService);
  });

  it('should return a product description', async () => {
    const result = await service.generateProductDescription({
      productName: 'TestProduct',
      features: 'fast, durable',
      tone: 'professional',
    });
    expect(result).toBe('Mocked product description.');
  });
}); 