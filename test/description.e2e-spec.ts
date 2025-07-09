import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { OpenAIService } from '../src/modules/description/openai.service';

describe('DescriptionController (e2e)', () => {
  let app: INestApplication;
  let openaiService: OpenAIService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(OpenAIService)
      .useValue({
        generateProductDescription: jest.fn().mockResolvedValue('Mocked description for TestProduct.'),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    openaiService = moduleFixture.get<OpenAIService>(OpenAIService);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/description/generate-description (POST)', () => {
    return request(app.getHttpServer())
      .post('/description/generate-description')
      .send({
        productName: 'TestProduct',
        features: 'fast, durable, lightweight',
        tone: 'professional',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('description');
        expect(res.body.description).toBe('Mocked description for TestProduct.');
      });
  });

  it('/description/generate-description (POST) - validation error', () => {
    return request(app.getHttpServer())
      .post('/description/generate-description')
      .send({
        productName: '', // Invalid: empty string
        features: 'fast, durable',
        tone: 'invalid-tone', // Invalid: not in enum
      })
      .expect(400);
  });
}); 