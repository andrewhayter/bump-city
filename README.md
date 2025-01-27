# Full-Stack Boilerplate: Next.js, Express, and PostgreSQL

This boilerplate provides a solid foundation for building full-stack applications using Next.js for the frontend, Express.js for the backend, and PostgreSQL as the database. It's designed to help you get started quickly with a modern, scalable, and production-ready application structure.

## Features

- **Frontend**: Next.js 15.0.0 with React 19.0.0-rc
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Containerization**: Docker and Docker Compose for easy development and deployment
- **API**: RESTful API structure
- **Styling**: Tailwind CSS for utility-first styling
- **Code Quality**: ESLint and TypeScript for static code analysis
- **Development**: Hot-reloading for both frontend and backend
- **Production-ready**: Optimized builds and configurations

## Prerequisites

- Node.js (v18 or later)
- Docker and Docker Compose
- Git

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/andrewhayter/bump-city.git
   cd bump-city
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories
   - Update the variables as needed

3. Start the application using Docker Compose:

   ```
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - PgAdmin: http://localhost:5050

## Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── ...
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Frontend (Next.js)

The frontend is built with Next.js and uses the App Router. Key files:

- `frontend/src/app/page.tsx`: Main page component
- `frontend/src/app/layout.tsx`: Root layout component

To add new pages or components, create new files in the appropriate directories under `frontend/src/app/`.

## Backend (Express.js)

The backend is an Express.js application written in TypeScript. Key files:

- `backend/src/index.ts`: Main application file

To add new routes or middleware, modify `backend/src/index.ts` or create new files in the `backend/src/` directory.

## Database

This boilerplate uses PostgreSQL with Prisma as the ORM. The Prisma schema is located at `backend/prisma/schema.prisma`.

To make changes to the database schema:

1. Modify `backend/prisma/schema.prisma`
2. Run migrations:
   ```
   docker-compose exec backend npx prisma migrate dev
   ```

## API Endpoints

- `GET /health`: Health check endpoint
- `GET /users`: Fetch all users

Add more endpoints in `backend/src/index.ts` as needed for your application.
