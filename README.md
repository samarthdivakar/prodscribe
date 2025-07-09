# 🚀 Prodscribe

An AI-powered product description generator that helps businesses create compelling, SEO-optimized product descriptions using advanced language models.

## 📋 Project Overview

Prodscribe is a full-stack web application that leverages AI to generate high-quality product descriptions. Built with modern technologies for scalability and performance.

### 🎯 Features

- **AI-Powered Generation**: Create compelling product descriptions using advanced language models
- **SEO Optimization**: Built-in SEO best practices for better search engine visibility
- **Real-time Preview**: See your generated descriptions instantly
- **Customizable Templates**: Multiple description styles and formats
- **Export Options**: Download descriptions in various formats (PDF, DOCX, etc.)

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **v0.dev** - AI-powered UI components

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe backend development
- **PostgreSQL** - Reliable relational database
- **Prisma** - Modern database toolkit
- **OpenAI API** - AI text generation

### DevOps
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **GitHub Actions** - CI/CD pipelines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- PostgreSQL (or use Docker)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prodscribe
   ```

2. **Start the development environment**
   ```bash
   docker-compose up -d
   ```

3. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd ../backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # Frontend (.env.local)
   cp frontend/.env.example frontend/.env.local
   
   # Backend (.env)
   cp backend/.env.example backend/.env
   ```

5. **Run the development servers**
   ```bash
   # Frontend (Terminal 1)
   cd frontend
   npm run dev
   
   # Backend (Terminal 2)
   cd backend
   npm run start:dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
prodscribe/
├── frontend/                 # Next.js 15 App
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/             # Utility functions
│   │   ├── styles/          # Global styles
│   │   └── tests/           # Test files
│   └── public/              # Static assets
├── backend/                  # NestJS API
│   ├── src/
│   │   ├── modules/         # Feature modules
│   │   │   ├── description/ # AI description generation
│   │   │   └── user/        # User management
│   │   └── common/          # Shared utilities
│   └── prisma/              # Database schema
├── k8s/                     # Kubernetes manifests
└── .github/workflows/       # CI/CD pipelines
```

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
```

## 🐳 Docker

### Development
```bash
docker-compose up -d
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## ☸️ Kubernetes Deployment

```bash
# Apply all manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -n prodscribe
```

## 📝 API Documentation

Once the backend is running, visit:
- Swagger UI: http://localhost:3001/api/docs
- OpenAPI JSON: http://localhost:3001/api-json

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@prodscribe.com
- 💬 Discord: [Join our community](https://discord.gg/prodscribe)
- 📖 Documentation: [docs.prodscribe.com](https://docs.prodscribe.com)

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Advanced AI models integration
- [ ] Bulk description generation
- [ ] E-commerce platform integrations
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

---

Made with ❤️ by the Prodscribe team 