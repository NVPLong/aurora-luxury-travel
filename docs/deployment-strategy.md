# Deployment Strategy — Aurora

Reliability and performance through modern CI/CD.

## 1. Production Hosting
- **Provider**: Vercel.
- **Features**: Edge Functions, Next.js ISR (Incremental Static Regeneration), and automatic Image Optimization.

## 2. CI/CD Pipeline
- **Quality Gates**:
  - `npm run lint`: Static code analysis.
  - `npm run build`: Production bundle verification.
  - TypeScript Type Checking.
- **Workflow**: 
  - Push to `dev` -> Preview Deployment.
  - Merge to `main` -> Production Deployment.

## 3. Environment Segregation
- **Development**: `.env.local`
- **Staging**: Vercel Preview environment.
- **Production**: Vercel Production environment with protected secrets.
