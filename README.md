# ✅ Todo List Management App

A modern and responsive **Todo List Application** built with **React.js** that helps users organize and manage daily tasks efficiently. Users can create notes, update task statuses, filter tasks by category, and restore deleted tasks when needed.

## 🌐 Live Demo

**Demo:** https://to-do-list-reactjs.vercel.app/

---

## 📖 Overview

This application provides a simple and intuitive way to manage tasks. Users can create tasks, track their progress, mark them as completed, and recover deleted tasks without losing important information.

The system categorizes tasks into different statuses, making it easy to monitor work progress and stay organized.

---

## ✨ Features

### 📝 Task Management

* Create new tasks
* Add task notes or descriptions
* Edit existing tasks
* Delete tasks
* Restore deleted tasks

### 📊 Task Categories

Tasks are organized into the following categories:

| Category    | Description                      |
| ----------- | -------------------------------- |
| All         | Display all tasks                |
| Todo        | Tasks that have not been started |
| Progressing | Tasks currently in progress      |
| Complete    | Tasks that have been completed   |

### 🔄 Status Management

* Change task status instantly
* Move tasks between categories
* Track task progress efficiently
* Visual indication of task states


### 🔍 Task Filtering

* View all tasks
* Filter by Todo
* Filter by Progressing
* Filter by Complete

### 📱 Responsive Design

* Mobile-friendly interface
* Tablet support
* Desktop optimized
* Clean and modern UI

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* HTML5
* CSS3
* Local Storage

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/meankunthea/To-do-list-Reactjs.git
```

Navigate to the project folder:

```bash
cd Todo-list-reactjs
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   ├── CategoryTabs.jsx
│   ├── StatusSelector.jsx
│   └── RestoreDialog.jsx
│
├── pages/
│   └── Home.jsx
│
├── hooks/
│
├── utils/
│
├── assets/
│
├── App.jsx
└── main.jsx
```

---

## 🎯 How It Works

### Create a Task

1. Enter a task title.
2. Add task details or notes.
3. Click **Add Task**.

### Update Task Status

Tasks can move through the following workflow:

```plaintext
Todo → Progressing → Complete
```

### Filter Tasks

Use category tabs to display:

* All Tasks
* Todo Tasks
* Progressing Tasks
* Completed Tasks

### Delete a Task

1. Click the delete button.
2. The task will be moved to deleted storage.

---

## 💡 Key Features

* Task creation
* Task editing
* Status updates
* Category filtering
* Deleted task recovery
* Local storage persistence
* Responsive design

---

## 🔮 Future Improvements

* User authentication
* Cloud synchronization
* Task priorities
* Due dates
* Search functionality
* Drag & drop task management
* Dark mode
* Push notifications

---

## 👨‍💻 Author

**Mean Kunthea**

* Frontend Developer
* AnB School

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, please give it a star on GitHub and share your feedback.
