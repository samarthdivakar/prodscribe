'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Form from '@/components/Form';
import OutputCard from '@/components/OutputCard';
import { generateDescription } from '@/lib/api';

interface FormData {
  productName: string;
  features: string[];
  tone: 'professional' | 'casual' | 'enthusiastic' | 'technical';
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; description: string } | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await generateDescription(data);
      setResult({
        title: `Description for ${data.productName}`,
        description: response.description,
      });
    } catch (error) {
      console.error('Error generating description:', error);
      setResult({
        title: 'Error',
        description: 'Failed to generate description. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Prodscribe
          </h1>
          <p className="text-lg text-gray-600">
            AI-powered product description generator
          </p>
        </motion.div>

        <div className="space-y-8">
          <Form onSubmit={handleSubmit} isLoading={isLoading} />
          
          {result && (
            <OutputCard 
              title={result.title} 
              description={result.description} 
            />
          )}
        </div>
      </div>
    </main>
  );
}
