## Run the Project with Docker

1. **Start all services in the background:**

```bash
docker-compose up -d --build
``` 

2. **Open Prisma Studio to view and manage the database:**

```bash
docker-compose exec server npx prisma studio
``` 