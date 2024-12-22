# To-Do List Application (T3 Stack)

This project is a basic To-Do List application built using the T3 stack: **Next.js**, **TypeScript**, **tRPC**, **Prisma**, and **Tailwind CSS**. It allows users to:

- Add, update, and delete tasks.
- Mark tasks as completed.

The application uses a SQLite database to store tasks and is deployed on Vercel for live use.

## Live Demo
https://react-todo-app-six-bay.vercel.app/
---

## Features

- **Create Tasks**: Add new tasks to your to-do list.
- **Edit Tasks**: Update task details.
- **Delete Tasks**: Remove tasks from the list.
- **Mark Complete**: Toggle task completion status.

---

## Installation and Setup

Follow these steps to run the application locally on your machine:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/t3-todo-list.git
cd t3-todo-list
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
# or
yarn install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL="file:./dev.db"
```

> Note: Prisma uses this `DATABASE_URL` to connect to a SQLite database.

### Step 4: Set Up the Database

Run the following Prisma commands to set up the database:

```bash
npx prisma migrate dev --name init
npx prisma db seed # Optional, if seeding is set up
```

### Step 5: Start the Development Server

Start the server locally:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Deployment

This application is deployed on [Vercel](https://vercel.com/). To deploy your own version:

1. Push your code to a GitHub repository.
2. Log in to Vercel and import the repository.
3. Add the `DATABASE_URL` environment variable in Vercel settings.
4. Deploy the application.

---

## Technologies Used

- **Next.js**: React framework for building the UI.
- **TypeScript**: Strongly typed JavaScript for safer code.
- **tRPC**: End-to-end type-safe API communication.
- **Prisma**: ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---
