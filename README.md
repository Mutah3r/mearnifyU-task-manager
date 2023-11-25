# Task Manager

This is a Task Management API

## Table of Contents

- [Task Schema](#task-schema)
- [API Documentation](#task-api-documentation)
- [Technologies Used](#technologies-used)
- [Installation And Usage](#installation-and-usage)
- [Folder Structure](#folder-structure)

# Task Schema

The `Task` schema includes the following fields:

- `title`: The title of the task. (String, required, max length: 20 characters)
- `description`: The description of the task. (String, required)
- `status`: The status of the task, which can be one of: 'Pending', 'In Progress', 'Completed'. (String, default: 'Pending')
- `dueDate`: The due date of the task. (Date, required)
- `completed`: Indicates whether the task has been completed. (Boolean, default: false)

### Validation Rules

- `title`: Must be provided, must not exceed 20 characters.
- `description`: Must be provided.
- `dueDate`: Must be provided.

# Task API Documentation

API for managing tasks.

## Base URL

The base URL for accessing the API endpoints is `http://your-base-url.com/`.

Please prepend this base URL to all endpoint paths mentioned below.

## Endpoints

### Get All Tasks

```http
GET /api/v1/tasks
```

#### Demo Response

```json
{
  "tasks": [
    {
      "status": "Completed",
      "completed": true,
      "_id": "6561e200e331703a3c716a6c",
      "title": "MearnifyU Task",
      "description": "Create a Task Manager API",
      "dueDate": "2023-11-30T18:00:00.000Z",
      "__v": 0
    }
  ]
}
```

### Get a Single Task By ID

```http
GET /api/v1/tasks/:id
```

#### Demo Response

```json
{
  "task": {
    "status": "Pending",
    "completed": false,
    "_id": "6561f03284e73193b4cc92de",
    "title": "Demo Task",
    "description": "This is a demo task",
    "dueDate": "2023-11-30T18:00:00.000Z",
    "__v": 0
  }
}
```

### Create a New Task

```http
POST /api/v1/tasks
```

#### Demo Request Body

```json
{
  "title": "Demo Task",
  "description": "This is a demo task",
  "dueDate": "12-01-2023"
}
```

### Update a Task

```http
PATCH /api/v1/tasks/:id
```

#### Demo Request Body

```json
{
  "title": "Demo Task2",
  "description": "This is a demo task",
  "dueDate": "12-01-2023",
  "completed": true,
  "status": "Completed"
}
```

### Delete a Task

```http
DELETE /api/v1/tasks/:id
```

# Technologies Used

This project uses the following technologies:

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: MongoDB object modeling for Node.js.
- **HTML**: Markup language for creating web pages.
- **CSS**: Styling language for designing web pages.

# Installation And Usage

Follow these steps to set up and run the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mutah3r/mearnifyU-task-manager.git
   ```

2. **Install dependencies:**

   ```bash
   cd mearnifyU-task-manager
   npm install
   ```

3. **Create a .env file:**

   Create a `.env` file in the root of your project and add the following information:

   ```
   PORT=5001
   MONGO_URI=your_mongo_connection_uri
   ```

   Replace `your_mongo_connection_uri` with your actual MongoDB connection URI and choose a suitable `PORT`.

4. **Start the server:**

   ```bash
   npm start
   ```

   Access the application in a web browser at `http://localhost:5001`.

### API Homepage

![API Homepage](/public/images/homepage.png)

# Folder Structure

```plaintext
project-root/
│
├── controllers/
│ ├── tasks.js
│
├── db/
│ ├── connect.js
│
├── errors/
│ ├── custom-error.js
│
├── middleware/
│ ├── async_js.js
│ ├── error-handler.js
│ ├── not-found.js
│
├── models/
│ ├── task.js
│
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── main.css
│
├── routes/
│ ├── task.js
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

# The END

Many Thanks to `SJ Innovation` and `Project MearnifyU Team` For Your Support!
