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

export async function generateDescription(data: {
  productName: string;
  features: string;
  tone: string;
}) {
  const res = await fetch("http://localhost:3001/description/generate-description", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to fetch: ${res.status} – ${error}`);
  }

  const json = await res.json();
  return json.description;
} 