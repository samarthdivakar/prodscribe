import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class GenerateDescriptionDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  features: string;

  @IsEnum(['professional', 'casual', 'funny', 'seo'])
  tone: 'professional' | 'casual' | 'funny' | 'seo';
}
