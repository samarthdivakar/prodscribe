interface GenerateDescriptionRequest {
  productName: string;
  features: string[];
  tone: 'professional' | 'casual' | 'enthusiastic' | 'technical';
}

interface GenerateDescriptionResponse {
  description: string;
  id: string;
  generatedAt: string;
}

export async function generateDescription(data: GenerateDescriptionRequest): Promise<GenerateDescriptionResponse> {
  // Temporary mock implementation
  // TODO: Replace with actual API call to backend
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
  
  const mockDescription = `Introducing the amazing ${data.productName}! This exceptional product is designed to meet your needs with its outstanding features including ${data.features.filter(f => f.trim()).join(', ')}.

With its cutting-edge technology and superior craftsmanship, this ${data.productName} represents the pinnacle of excellence in its category. Whether you're a professional or enthusiast, this product will exceed your expectations and deliver outstanding performance.

Perfect for those who demand quality and innovation, the ${data.productName} is built to last and designed to impress. Experience the difference that quality makes with this remarkable product.`;

  return {
    description: mockDescription,
    id: `desc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    generatedAt: new Date().toISOString(),
  };
} 