# 📝 Task Manager API (NestJS + Swagger)

A simple RESTful API built with **NestJS** to manage tasks, with Swagger documentation.

## 🚀 Features

- Create tasks
- View all tasks
- Delete tasks
- In-memory data storage
- Swagger API documentation

## 🛠️ Tech Stack

- [NestJS](https://nestjs.com/) - Backend Framework
- [Swagger](https://swagger.io/) - API Documentation
- [TypeScript](https://www.typescriptlang.org/) - Language

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Tanushree-jain/task-manager.git
cd task-manager
```
### 2. Install dependencies

```bash
npm install
```
### 3. Run the application

```bash
npm run start
```

Server will start at http://localhost:3000

### 4. Swagger API Docs
Visit: http://localhost:3000/api

🧪 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/tasks`     | Create a new task   |
| GET    | `/tasks`     | Get all tasks       |
| DELETE | `/tasks/:id` | Delete a task by ID |

📂 Project Structure

```ruby
src/
├── main.ts               # App entry point + Swagger setup
├── app.module.ts         # Root module
└── task/
    ├── task.module.ts    # Task module
    ├── task.controller.ts# Task controller (routes)
    ├── task.service.ts   # Task service (logic)
    ├── task.model.ts     # Task type definition
    └── dto/
        └── create-task.dto.ts  # DTO for creating a task
```

##  🔚 Future Enhancements
Add database (PostgreSQL or MongoDB)
Add authentication
Deploy to a cloud platform (Render, Railway, etc.)

## 👩‍💻 Author
Built by Tanushree Gangwal as part of learning NestJS.